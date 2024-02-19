import { Router } from "express";
import { User } from "../models/user.mjs";
import { validateEditProfile } from "../middlewares/users.mjs";
import { authorisationMiddleWare } from "../middlewares/authorisationMiddleware.mjs";

const router = Router();

router.get('/api/profile', authorisationMiddleWare, async (req, res) => {
    const { user } = req
    try {
        const finduser = await User.findOne({ _id: user })
        if (!finduser) return res.status(404).send('Account not found.')
        let { name, email, username } = finduser
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
        const finduser = await User.findOne({ _id: req.user })
        console.log(finduser, editedUser)
        editedUser.save();
        return res.status(201).send(editedUser)

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
})





export default router;