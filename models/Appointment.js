const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  date: {
    type: String
  }
});

const Appointment = mongoose.model('appointment', AppointmentSchema);

module.exports = Appointment;
