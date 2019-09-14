const express = require('express');
const router = express.Router();

const Artist = require('../../models/Artist');

// @route    GET api/artists
// @desc     Get artist info
// @access   Public
router.get('/', (req, res) => {
  Artist.find({})
    .then(artist => {
      res.json(artist);
    })
    .catch(err => {
      res.json(err);
    });
});

// @route    GET api/artists/photographers
// @desc     Get artist info by photographer
// @access   Public
router.get('/', (req, res) => {
  Artist.find({})
    .then(artist => {
      res.json(artist);
    })
    .catch(err => {
      res.json(err);
    });
});

// @route    POST api/artists
// @desc     Create a new artist
// @access   Public
router.post('/', (req, res) => {
  Artist.create(req.body)
    .then(artist => {
      res.json(artist);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
