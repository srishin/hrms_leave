var express = require('express');
var router = express.Router();
const users = require('./v1/user.js')
const login = require('./v1/login.js')
const roles = require('./v1/roles.js')
router.use('/users',users);
router.use('/login',login);
router.use('/roles',roles);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
