import mongoose, { mongo } from "mongoose";
import { User } from '../models/user.mjs';

const postSchema = mongoose.Schema({
    imageUrl: {
        type: mongoose.Schema.Types.String
    },
    text: {
        type: mongoose.Schema.Types.String,
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }
}, {timestamps: true})

export const Post = mongoose.model('Post', postSchema);