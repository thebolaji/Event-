var express = require('express');
var router = express.Router();
const go = require('../controller/control');

/* GET home page. */
router.get('/', go.homePage);
router.get('/events', go.eventsPage);
router.get('/create', go.createPage);
router.post('/create', go.create);
router.get('/post/:id', go.singlepost);


module.exports = router;