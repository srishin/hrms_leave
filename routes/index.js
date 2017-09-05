var express = require('express');
var router = express.Router();
const users = require('./v1/user.js')
const login = require('./v1/login.js')
const roles = require('./v1/roles.js')
const leaveTypes = require('./v1/leaveTypes.js')
router.use('/users',users);
router.use('/login',login);
router.use('/roles',roles);
router.use('/leave-types',leaveTypes);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
