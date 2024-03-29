const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

// Bodyparser Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

// DB Config
const db = require('./config/keys').mongoURI

// Connect MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log("Some error: " + err))

// Use Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))