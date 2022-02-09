const express = require('express');
const router = express.Router();

const movieHandler = require("../../handlers/movie");

router.get('/',movieHandler.movieList);
router.post('/',movieHandler.storeMovieData);
router.put('/:id',movieHandler.updateMovie);
router.delete('/:id',movieHandler.deleteMovie);

module.exports = router;