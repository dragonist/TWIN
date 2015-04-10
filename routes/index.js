var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TWIN', userId:'' });
});
router.get('/howto', function(req, res, next) {
  res.render('index', { title: 'TWIN', userId:'' });
});

module.exports = router;
