const express = require('express');
const router = express.Router();
const movieRouter = require("./movies/index")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message: "Hello Worlds : API Movie Services !"
  })
});

router.use('/api/v1',movieRouter);


module.exports = router;
