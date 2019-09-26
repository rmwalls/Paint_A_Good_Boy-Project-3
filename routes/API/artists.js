// ----- REQUIRE EXPRESS ----- //
const express = require('express');
const router = express.Router();

// ----- REQUIRE MODELS ----- //
const Artist = require('../../models/Artist');

// @route    GET api/artists
// @desc     Get artist info
// @access   Public
router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    res.status(200).json(artists);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// @route    GET api/artists/:id
// @desc     Get artist info by id
// @access   Public
router.get('/:id', async (req, res, next) => {
  try {
    const { artistId } = req.params;
    const artist = await Artist.findById(artistId);
    res.status(200).json(artist);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// @route    GET api/artists/:career
// @desc     Get artist info by their profession
// @access   Public
router.get('/:career', async (req, res, next) => {
  try {
    const { career } = req.params.toLowerCase();
    const artist = await Artist.find(career);
    res.status(200).json(artist);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
