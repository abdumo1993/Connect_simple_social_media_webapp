import mongoose from "mongoose";
import { User } from "./user.mjs";
import { Post } from "./posts.mjs";
const commentSchema = mongoose.Schema({
    comment: {
        type: mongoose.Schema.Types.String
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true})

export const Comment = mongoose.model('Comment', commentSchema);