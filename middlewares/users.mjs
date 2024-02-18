import { User } from "../models/user.mjs"
const validateEditProfile = ( req, res, next ) => {
    const { name, username, email } = req.body
    if (!req.user) return res.sendStatus(400);
    try {
        const users = User.find({email: email})
        if (users.length !== 0) return res.sendStatus(400);
        const finduser = User.findOne({_id: req.user})
        

    }catch(err) {
        console.log(err)
        return res.sendStatus(500);
    }

}

export { validateEditProfile }