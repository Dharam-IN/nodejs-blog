const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: 'blogs',
        required: true
    }
}, {timestamps: true})

const CommentModel = mongoose.model("comments", commentSchema);

module.exports = CommentModel