import { Router } from "express";
import { User } from "../models/user.mjs";
import { validateAddAdmin,  } from "../middlewares/users.mjs";
import { adminAuthorisationMiddleware, authorisationMiddleWare } from "../middlewares/authorisationMiddleware.mjs";
import { Post } from '../models/posts.mjs'

const router = Router();

// a router for only admins
router.delete('/api/user/:id', authorisationMiddleWare, adminAuthorisationMiddleware, async (req, res) => {
    const { params: { id } } = req
    try {
        const deletedUser = await User.findOneAndDelete({ _id: id })
        if (!deletedUser) return res.status(404).send('User not found')
        return res.status(202).send('Deletion accepted')
    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }

})
router.delete('/api/post/:id', authorisationMiddleWare, adminAuthorisationMiddleware, async (req, res) => {
    const { params: { id } } = req
    try {
        const deletePost = await Post.findOneAndDelete({ _id: id })
        if (!deletePost) return res.status(404).send('Post not Found')
        return res.status(202).send('Deletion Accepted')
    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }

})

router.patch('/api/user/:id', authorisationMiddleWare, adminAuthorisationMiddleware, validateAddAdmin, async (req, res) => {


    const { params: { id }, body: { isAdmin } } = req
    try {
        // const finduser = await User.({_id: user})
        // const newBody = { ...finduser, ...body }

        const editedUser = await User.findOneAndUpdate({ _id: req.user }, { isAdmin: isAdmin  }, { new: true })
        editedUser.save();
        const resBody = {
            name: editedUser.name,
            username: editedUser.username,
            email: editedUser.email
        }
        console.log(editedUser);
        return res.status(201).send(email)

    } catch (err) {
        console.log(err)

        return res.sendStatus(500);
    }

})




export default router;