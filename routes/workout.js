const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workout.controller')

// GET all Workouts
router.get('/', getWorkouts)

// Get a Single Workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router