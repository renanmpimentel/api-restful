var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.send('response GET');
});

router.post('/post', function(req, res, next) {
  var data = req.body;
  res.json({'method': 'POST', 'response': data});
});

router.put('/put', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
