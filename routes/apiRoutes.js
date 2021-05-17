const mongoose = require("mongoose");
const express = require("express");
const Workout = require("../models/workout.js");
const router = express.Router();

router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body }}, { new: true })
    .then (dbWorkout => res.json(dbWorkout))
    .catch(err => {
        res.status(400).json(err);
    })
})

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;