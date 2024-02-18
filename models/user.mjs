import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    name: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    username: {
        type: mongoose.Schema.Types.String,
        default: null
    }
})

export const User = mongoose.model('User', userSchema);