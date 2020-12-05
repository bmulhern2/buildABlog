// Require Dependencies
let mongoose = require('mongoose')

let Schema = mongoose.Schema

let BlogPostSchema = new Schema({
    title: String,
    description: String,
    post: String
})

// Export the Schema
module.exports = BlogPostSchema