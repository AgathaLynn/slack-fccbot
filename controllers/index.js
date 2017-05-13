var express = require('express');
var router = express.Router();

router.use('/oauth', require('./oauth'));
router.use('/fccbot', require('./fccbot'));
router.use('/select-challenge', require('./challenge'));

module.exports = router;
