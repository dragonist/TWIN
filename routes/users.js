var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  	res.render('login');
});

router.get('/logout', function(req, res, next) {
  	res.render('index');
});

router.get('/signIn', function(req, res, next) {
 	res.render('signIn');
});

router.get('/edit', function(req, res, next) {
  	res.render('edit');
});

module.exports = router;
