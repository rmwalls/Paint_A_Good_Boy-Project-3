const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
const url = process.env.MONGODB_URI || 'mongodb://localhost/petapp';
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', url);
});

db.on('error', err => {
  console.error('connection error:', err);
});

// Routes
app.use('/api/artists', require('./routes/api/artists.js'));
app.use('/api/users', require('./routes/api/users.js'));

// app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
