const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: String,
    content: String,
    date: Date
})

const blogPostSchema = new Schema({
    title: String,
    body: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('BlogPost', blogPostSchema);