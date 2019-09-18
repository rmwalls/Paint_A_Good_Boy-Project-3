const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  isArtist: Boolean,
  career: String,
  media: [String],
  artistPhoto: String,
  bioInfo: String,
  appointments: [Date],
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates the model from the above schema, using mongoose's model method
var Artist = mongoose.model('Artist', ArtistSchema);

// Export the Artist model
module.exports = Artist;