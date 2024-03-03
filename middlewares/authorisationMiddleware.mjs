/*
since we want to allow all users to do the same thing, we can ignore all other authorisation and only check if logged in
or not
 */
import mongoose from "mongoose";
import { User } from "../models/user.mjs";
export const authorisationMiddleWare = (req, res, next) => {
    if (!req.user) return res.status(401).send('Not Authorised. Please Login/Register.')
    next();
}

export  const adminAuthorisationMiddleware = async (req, res, next) => {
    // since it will be called after authoristionMiddleWare we dont need to check if user exists or not
    try {
        const finduser = await User.findOne({_id: req.user})
        if (finduser.admin) next()
        return res.status(401).send('Require Admin Previleges!')
    }catch {
        return res.status(500).send('Internal Server Error')
    }
}