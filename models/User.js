const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is Required',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function(input) {
        return input.length >= 3;
      },
      'Password should be longer.'
    ]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ]
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.models.User || mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;