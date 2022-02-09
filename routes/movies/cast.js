const express = require('express');
const router = express.Router();
const castHandler = require('../../handlers/cast')

router.get('/',castHandler.castList);
router.post('/',castHandler.storeCastData);
router.put('/:id',castHandler.updateCast);
router.delete('/:id',castHandler.deleteCast);

module.exports = router;