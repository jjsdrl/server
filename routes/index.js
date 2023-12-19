var express = require('express');
var router = express.Router();
var vue = require('../controllers/BookConntroller')
var User = require('../controllers/UserConntroller')
/* GET home page. */
router.get('/book', vue.getBook);
router.get('/getBookname',vue.getBookname);
router.get('/getBookxx',vue.getBookxx);
router.get('/user', User.getUser);
router.get('/getUserwd',User.getUserwd);
router.get('/getUsersj',User.getUsersj);
router.get('/getCreate',User.getCreate);

module.exports = router;
