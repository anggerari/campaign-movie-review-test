const express = require('express');
const router = express.Router();

const movieCastHandler = require('../../handlers/movie-cast')

router.post('/', movieCastHandler.storeMovieCast)
router.put('/:id',movieCastHandler.movieCastUpdate)
router.delete('/:id',movieCastHandler.movieCastDelete)

module.exports = router;