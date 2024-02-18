import { validate } from 'email-validator';
const minP = 8;
const maxP = 40
const validateLogin = (req, res, next) => {
    if (!(req.body['email'] && req.body['password'])) return res.status(400).send('Credentials Missing.')
    // valid or invalid email?
    const { email, password } = req.body;
    if (!validate(email)) return res.status(400).send('invalid email address')
    if (password.length < minP || password.length > maxP) return res.status(400).send(`invalid password length. must be between ${minP} and ${maxP}`)
    next();
}

const validateRegistration = (req, res, next) => {
    if (req.body.password !== req.body.Cpassword) return res.status(400).send('password and confirm password must match.')
    next();
}

export { validateLogin, validateRegistration};