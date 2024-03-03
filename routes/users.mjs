import { Router } from "express";
import { User } from "../models/user.mjs";
import { validateAddAdmin, validateEditProfile } from "../middlewares/users.mjs";
import { adminAuthorisationMiddleware, authorisationMiddleWare } from "../middlewares/authorisationMiddleware.mjs";
import { Post } from '../models/posts.mjs'

const router = Router();

router.get('/api/profile', authorisationMiddleWare, async (req, res) => {
    const { user } = req
    try {
        const finduser = await User.findOne({ _id: user })
        if (!finduser) return res.status(404).send('Account not found.')
        let { name, email, username } = finduser
        console.log(email)
        name = name || 'unknown';
        username = username || 'unknown';
        return res.status(200).send({ name: name, username: username, email: email })

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
})
// partial update.
router.patch('/api/profile', authorisationMiddleWare, validateEditProfile, async (req, res) => {
    const { user, body } = req
    try {
        // const finduser = await User.({_id: user})
        // const newBody = { ...finduser, ...body }
        const { name, username, email } = req.body

        const editedUser = await User.findOneAndUpdate({ _id: req.user }, { name: name, username: username, email: email }, { new: true })
        editedUser.save();
        const resBody = {
            name: editedUser.name,
            username: editedUser.username,
            email: editedUser.email
        }
        return res.status(201).send(email)

    } catch (err) {
        console.log(err)
        console.log('there')

        return res.sendStatus(500);
    }
})

router.delete('/api/profile/delete', authorisationMiddleWare, async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.user })
        if (!deletedUser) return res.status(404).send('User not found')
        return res.status(202).send('Deletion accepted')
    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
})



export default router;