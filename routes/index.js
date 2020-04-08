var express = require('express');
var router = express.Router();
const go = require('../controller/control');

/* GET home page. */
router.get('/', go.homePage);
router.get('/events', go.eventsPage);
router.get('/post', go.postPage);
router.post('/post', go.post);

module.exports = router;