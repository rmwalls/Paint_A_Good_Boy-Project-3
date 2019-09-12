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

module.exports = router;
