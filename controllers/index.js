var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/oauth', require('./oauth'));
router.use('/fccbot', require('./fccbot'));
router.use('/actions', require('./actions'));
router.use('/favicon.ico', express.static('../assets/favicon.ico'));

module.exports = router;
