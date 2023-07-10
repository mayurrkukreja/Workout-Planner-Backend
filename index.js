const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workout')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

app.get('/', "Welcome to Workout App")

// Connect to DataBase
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
        console.log("Server Started on", process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
})

