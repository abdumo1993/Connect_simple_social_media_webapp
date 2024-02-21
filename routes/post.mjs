import { Router } from "express";
import { Post } from '../models/posts.mjs'
import { Comment } from "../models/comments.mjs";
import { Like } from "../models/likes.mjs";
import { validateComments, validateLikes, validatePost } from "../middlewares/post.mjs";
import { authorisationMiddleWare } from "../middlewares/authorisationMiddleware.mjs";
import multer from "multer";
const upload = multer({ dest: 'uploads/' }); 
const router = Router();

router.post('/api/posts', authorisationMiddleWare, upload.single('image'),validatePost, async (req, res) => {
    const { imageUrl, text } = req.body;
    const author = req.user
    const newPost = new Post({
        imageUrl: imageUrl,
        text: text,
        author: author
    })
    try {
        await newPost.save()
        return res.status(201).send(newPost);

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
})
// newsfeed.
router.get('/api/posts', async (req, res) => {
    console.log(req.user)

    try {
        const posts = await Post.find({})
        res.status(200).send(posts)
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

})
router.get('/api/posts/:id', authorisationMiddleWare, async (req, res) => {
    const id = req.params.id
    try {
        const post = await Post.find({ _id: id })
        const comments = await Comment.find({ postId: id })
        return res.status(200).send({ post: post[0], comments: comments })

    } catch (err) {
        console.log(err)
        return res.sendStatus(404);
    }
})
router.post('/api/posts/:id/like', authorisationMiddleWare, validateLikes, async (req, res) => {
    const { params: { id }, body: { value } } = req
    const author = req.user


    try {
        const post = await Post.findOne({ _id: id })
        if (!post) return res.sendStatus(404);
        const like = await new Like({ value: value, author: author, postId: id }).save()
        if (!like) return res.sendStatus(500);
        post.likes += 1;
        await post.save();
        return res.sendStatus(201)
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }


})

router.post('/api/posts/:id/comment', authorisationMiddleWare, validateComments, async (req, res) => {
    console.log(req.body)
    const { id } = req.params
    const author = req.user
    const data = {
        comment: req.body.comment,
        author: author,
        postId: id
    }
    try {
        const post = await Post.find({ _id: id })
        const comment = await new Comment(data).save()
        return res.status(201).send(comment)
    } catch (err) {
        return res.sendStatus(500);
    }
})


export default router;