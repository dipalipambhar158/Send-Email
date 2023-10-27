var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

router.post('/insert',user.insert);

module.exports = router;