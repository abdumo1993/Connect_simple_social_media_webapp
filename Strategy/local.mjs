import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../models/user.mjs";
import bcrypt from 'bcrypt';


passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {

    try{
        const findUser = await User.findOne({_id: id })
        if (!findUser) throw new Error('user not found')
        done(null, findUser.id)
    }catch(err){
        done(err, null)
    }
})
export default passport.use(
    new Strategy({usernameField: 'email'}, async (email, password, done) => {
    console.log('nowheer')

        try {
            const findUser = await User.findOne({ email: email })
            if (!findUser) throw new Error('user not found')
            const compatible = await bcrypt.compare(password, findUser.password)
            if (!compatible) throw new Error('Incorrect Password for this Email.')

            done(null, findUser)
            
    
        }catch(err) {
            done(err, null)
    
        } 

    } 

    )
)