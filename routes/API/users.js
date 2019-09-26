// ----- REQUIRE EXPRESS AND PASSPORT ----- //
const passport = require('passport');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// ----- REQUIRE MODELS ----- //
const User = require('../../models/User');
const Appointment = require('../../models/Appointment');

// @route    POST api/users/register
// @desc     Register and create a new user
// @access   Public
router.post('/register', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please include a email and password.'
    });
  } else {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // console log to check whether the email is logged in correctly
    console.log(req.body.email);

    // save the user
    newUser.save(function(err) {
      console.log('saving the user...');
      if (err) {
        return res.json({ success: false, msg: err });

        // Use this commented out piece of code to check the error
        // messages on login/register
        // return res.json({ success: false, msg: err });
      }
      newUser.comparePassword(req.body.password, function() {
        var token = jwt.sign(newUser.toJSON(), settings.secret);
        // return the information including token as JSON
        res.json({
          success: true,
          msg: 'Successfully created new user.',
          token: 'JWT ' + token
        });
      });
    });
  }
});

// @route    POST api/users/login
// @desc     login
// @access   Public
router.post('/login', function(req, res) {
  User.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) throw err;
      console.log(req.body.email);
      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            var decodedToken = jwt.decode(token);
            console.log(decodedToken);
            // return the information including token as JSON
            res.json({
              success: true,
              token: 'JWT ' + token,
              decodedToken: decodedToken
            });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    }
  );
});

// @route    GET api/users/:userId/appointments
// @desc     Get the user's appointments
// @access   Private
router.get('/:userId/appointments', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('appointments');
    console.log('user', user);
    res.status(200).json(user.appointments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// @route    POST api/users/:userId/appointments
// @desc     Create a new appointment and save to User
// @access   Private
router.post('/:userId/appointments', async (req, res, next) => {
  try {
    const { userId } = req.params;
    // create a new appointment
    const newAppointment = new Appointment(req.body);
    // Get user
    const user = await User.findById(userId);
    // Assign user to the appointment
    newAppointment.user = user;
    // Save the new appointment
    await newAppointment.save();
    // Add appointment to the user's appointment array
    user.appointments.push(newAppointment);
    // Save the user
    await user.save();
    res.status(201).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
