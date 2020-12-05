// Require Dependencies
let mongoose = require('mongoose')

// Import Schema
let BlogPostSchema = require('../Schema/blogSchema')

// Model and Export the Schema
module.exports = mongoose.model('BlogPost', BlogPostSchema)