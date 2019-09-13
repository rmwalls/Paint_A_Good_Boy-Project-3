const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes');
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API Test Route
app.get('/', (req, res) => res.send('Project 3 API Running'));

// Routes
app.use('/api/artists', require('./routes/api/artists.js'));

// app.use(routes);

// Connect to the Mongo DB
// console.log(process.env.MONGODB_URI);
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

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
