var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../../config/settings');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/user");

router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    // console log to check whether the username is logged in correctly
    console.log(req.body.username);

    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      newUser.comparePassword(req.body.password, function() {
        var token = jwt.sign(newUser.toJSON(), settings.secret);
        // return the information including token as JSON
        res.json({success: true, msg: 'Successful created new user.', token: 'JWT ' + token});
      })
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    console.log(req.body.username);
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});


module.exports = router;
