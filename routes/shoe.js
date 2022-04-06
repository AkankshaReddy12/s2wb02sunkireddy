var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoe', { title: 'Search results Shoes' });
});

module.exports = router;
