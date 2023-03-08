var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ result: 'ok' });
});

module.exports = router;