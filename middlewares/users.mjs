import { User } from "../models/user.mjs"
const validateEditProfile = async (req, res, next) => {
    const { name, username, email } = req.body
    if (!req.user) return res.status(400).send('user not found');
    req.body = { name: name, username: username, email: email }
    next();

}

const validateAddAdmin = async (req, res, next) => {
    const { params: { id }, body: { isAdmin } } = req
    if (!id || isAdmin === undefined) return res.status(401).send('bad request')
    next();
}
export { validateEditProfile, validateAddAdmin }