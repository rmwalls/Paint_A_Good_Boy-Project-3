const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model('Appointments', AppointmentSchema);
