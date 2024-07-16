const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    coverImageUrl: {
        type: String,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    }
}, {timestamps: true})

const BlogModel = mongoose.model("blogs", modelSchema);

module.exports = BlogModel