import { Router } from "express";
import { User } from "../models/user.mjs";

const router = Router();

router.get('/api/profile', async (req, res) => {
    const { user } = req
    try {
        const finduser = await User.findOne({_id: user})
        if (!finduser) return res.status(404).send('Account not found.')
        let { name, email, username } = finduser
        name = name || 'unknown';
        username = username || 'unknown';
        return res.status(200).send({name: name, username: username, email: email})

    }catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
})
// unfinished
router.patch('/api/profile', async (req, res) => {
    const { user } = req
})





export default router;