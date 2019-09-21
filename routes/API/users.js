var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../../config/settings');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../../models/User');

router.post('/register', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please include a email and password.'
    });
  } else {
    var newUser = new User({
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
            res.json({ success: true, token: 'JWT ' + token, decodedToken: decodedToken });
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

module.exports = router;
