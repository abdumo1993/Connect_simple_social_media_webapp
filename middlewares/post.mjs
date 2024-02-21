import { Like } from "../models/likes.mjs";

const validatePost = (req, res, next) => {
    const { text } = req.body
    const imageUrl = req.file['path']
    if (imageUrl) req.body.imageUrl = imageUrl
    const author  = req.user
    
    if (!author) {
        console.log('author not found')
        return res.sendStatus(400)}
    // altleast one of them must be present. else invalid.
    if (!imageUrl && !text) {
        return res.sendStatus(400)}
    next();
}

const validateLikes = async (req, res, next) => {
    const { value } = req.body
    const author  = req.user
    const postId  = req.params.id
    if (!value || !author) return res.sendStatus(400)
    try {
    const likes = await Like.findOne({ postId: postId, author: author })
        if (value && likes) return res.sendStatus(400)
        next();
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }
}
const validateComments = async (req, res, next) => {
    const { comment } = req.body
    const  author  = req.user
    const  postId  = req.params
    if (!author) return res.sendStatus(400)
    if (!comment) return res.sendStatus(400)
    next();
}

export { validateComments, validateLikes, validatePost };