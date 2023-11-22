// Create web server
// 1. Create web server
// 2. Create route
// 3. Create controller
// 4. Create model

// 1. Create web server
const express = require('express')
const app = express()

// 2. Create route
const comments = require('./routes/comments')
app.use('/comments', comments)

// 3. Create controller
const commentsController = require('./controllers/commentsController')
app.use('/comments', commentsController)

// 4. Create model
const commentsModel = require('./models/commentsModel')
app.use('/comments', commentsModel)

// 5. Create database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err))

// 6. Create port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))