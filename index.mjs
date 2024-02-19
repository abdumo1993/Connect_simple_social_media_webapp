import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './models/user.mjs';
import session from 'express-session';
import passport from 'passport';
import routes from './routes/index.mjs';
const app = express();

// app.options('/login', function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     res.end();
// });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

mongoose.connect('mongodb://localhost:27017/connect')
    .then(() => console.log('connected to database.'))
    .catch(err => console.log(err))
// app.use(cors());

app.use(json());
app.use(session({
    secret: 'my_secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());

// all routes assossiated with authentication.
app.use(routes)




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})