var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;
