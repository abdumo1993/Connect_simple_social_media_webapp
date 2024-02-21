import mongoose from "mongoose";
import { User } from "./user.mjs";
import { Post } from "./posts.mjs";

const likeSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    }
}, {timestamps: true})

export const Like = mongoose.model('Like', likeSchema);