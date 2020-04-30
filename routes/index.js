var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tyk', function(req, res, next) {
  res.render('index', { title: 'Express110' });
});

module.exports = router;
