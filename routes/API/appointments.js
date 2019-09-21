const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const Artist = require('../../models/Artist');
const Appointment = require('../../models/Appointment');

// @route    POST api/appointments
// @desc     Create a new appointment
// @access   Private
router.post('/', (req, res) => {
  const newAppointment = new Appointment({
    user: User._id,
    artist: Artist._id,
    date: req.body.date
  });

  newAppointment.save((err, appointment) => {
    if (err) {
      return res.status(500).json({
        msg: 'Error creating appointment',
        error: err
      });
    }
    return res.status(201).json(appointment);
  });
});

// @route   GET api/appointments/:id
// @desc    Get a set appointment by id
// @access  Private
router.get('/:id', (req, res) => {
  Appointment.findById({ id: _id }, (err, appointment) => {
    if (err) throw err;
    res.send(appointment);
  });
});

module.exports = router;
