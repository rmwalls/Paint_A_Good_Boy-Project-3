// ----- REQUIRE EXPRESS ----- //
const express = require('express');
const router = express.Router();

// ----- REQUIRE MODELS ----- //
const Appointment = require('../../models/Appointment');

// @route    POST api/appointments
// @desc     Create a new appointment
// @access   Private
router.post('/', async (req, res) => {
  const { user, artist, date } = req.body;

  const newAppointment = await Appointment.create({
    user,
    artist,
    date
  }).catch(err => console.error(err));

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

// @route    GET api/appointments/:userId
// @desc     Get an appointment by User and populate Artist fields
// @access   Private
router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const appointment = await Appointment.find({ user: userId }).populate(
      'artist'
    );
    // console.log('appointment', appointment);
    res.status(200).json(appointment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// @route    POST api/appointments/delete/:appointmentId
// @desc     Remove an appointment by id
// @access   Private
router.post('/delete/:appointmentId', async (req, res, next) => {
  try {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findByIdAndRemove({
      _id: appointmentId
    });
    res.status(200).json(appointment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
