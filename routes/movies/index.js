const express = require('express');
const router = express.Router();

const movieRouter = require("./movie")
const castRouter = require("./cast")
const movieCastRouter = require('./movie-cast');

router.use('/movies',movieRouter);
router.use('/cast',castRouter);
router.use('/movie-cast', movieCastRouter);

module.exports = router;