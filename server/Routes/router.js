/*

Name: Brendan mulhern
Title: Build A blog
References: 
Stackoverflow: https://stackoverflow.com/questions/45660859/typeerror-cannot-read-property-push-of-undefined-express

*/
 
// Require Dependencies
let express = require('express')
let bodyParser = require('body-parser')

// Define Router
let router =  express.Router()

// Import the BlogPost Model
let BlogPost = require('../Model/blog.js')

// Body Parser Middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// Get Request
router.get('/', function(req, res) {
    // Find all of the BlogPost
    BlogPost.find({}, function(err, blogPost) {
        if (err) {
            res.json(err)
        } else {
            res.json(blogPost)
        }
    })
})

// Post Request
router.post('/post', function(req, res) {
    BlogPost.create(req.body)
})

// Update Route
router.put('/put/:id', function(req, res) {
    BlogPost.findOne({ "_id": req.params.id }, function(err, post) {
        if (err) {
            res.json(err)
        } else {
            post.set(req.body)
            post.save()
            res.json("Update Success")
        }
    })
})

// Delete Route
router.delete('/delete/:id', function(req, res) {
    BlogPost.findOne({ "_id": req.params.id }, function(err, post) {
        if (err) {
            res.json(err)
        } else {
            post.remove()
            res.json("Delete Success")
        }
    })
})

// Export router
module.exports = router