const express = require('express')
const appointment = express.Router();
// const Appointment = require('../models/appointment.js')

//Index Route
appointment.get('/', (req,res) => {
    Appointment.find({}, (err, foundAppointments) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(foundAppointments)
    })
})

//Create Route
appointment.post('/', (req,res) => {
    Appointment.create(req.body, (err, createdAppointment) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).send(createdAppointment)
    })
})

//Delete Route
appointment.delete('/:id', (req,res) => {
    Appointment.findByIdAndRemove(req.params.id, (error, deleted) => {
        if (error) {
            res.status(400).json({ error: error,message })
        }
        res.status(200).json(deletedAppointment)
    })
})

//Update Route
appointment.put('/:id', (req,res) => {
    Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedAppointment) => {
        if (err) {
            res.status(400).json({ err: err.message})
        }
        res.status(200).json(updatedAppointment)
    })
})

module.exports = appointment