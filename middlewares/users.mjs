import { User } from "../models/user.mjs"
const validateEditProfile = async (req, res, next) => {
    const { name, username, email } = req.body
    if (!req.user) return res.sendStatus(400);
    try {
        if (email.length === 0) return res.status(400).send('email cant be empty')
        const users = User.find({ email: email })
        if (users.length !== 0 && users[0]._id !== req.user) return res.sendStatus(400);
        next();

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }

}

export { validateEditProfile }