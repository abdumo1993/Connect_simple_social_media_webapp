import { Router } from "express";
import { validateLogin, validateRegistration } from "../middlewares/auth.mjs";
import { User } from "../models/user.mjs";
import '../Strategy/local.mjs';
import bcrypt from 'bcrypt';
import passport from "passport";
const router = Router()
const saltRounds = 10;


router.post('/auth/login', validateLogin, passport.authenticate('local'), async (req, res) => {
    // console.log(req.user)
    if (req.user) return res.sendStatus(200)
    // const exist = await bcrypt.compare(email,  )

})
router.post('/auth/register', validateLogin, validateRegistration, async (req, res) => {

    let { email, password, Cpassword } = req.body;
    try {
        password = await bcrypt.hash(password, saltRounds)

        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();
        return res.sendStatus(201)
    } catch (err) {
        if (err.name === "MongoServerError" && err.code === 11000) return res.status(400).send('Email already in use.')
        return res.sendStatus(500).send('Something went wrong.')
    }


})

router.use((err, req, res, next) => {
    res.status(401).send(err.message)
});




export default router;