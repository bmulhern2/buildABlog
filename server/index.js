/*

Name: Brendan mulhern
Title: Build A blog
References:
Cookie Serice: https://www.npmjs.com/package/ngx-cookie-service

*/
// Require Dependencies
let http = require('http')
let express = require('express')
let mongoose = require('mongoose')
let dotenv = require('dotenv')
dotenv.config()
let path = require('path')

// Define a new instance of express's app
let app = express()

// Connect to Mongodb
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log("Database Connected")
})

// Import Router
let router = require('./Routes/router')

// Use Router
app.use('/api', router)

// Use Client Code
app.use(express.static(path.join(__dirname, '../dist/buildABlog')))
app.use('/', express.static(path.join(__dirname, '../dist/buildABlog/index.html')))

// Create Server
let server = http.createServer(app)

// Listen the server
server.listen(process.env.PORT, function() {
    console.log("Server Started On Port " + process.env.PORT)
})