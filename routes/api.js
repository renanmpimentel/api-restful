var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {
  if(req.method === 'POST' || req.method === 'PUT') {
    if (!req.is('application/json')) {
      res.status(415);
      res.json({
        'error': 'content-type error',
        'message': 'Use content-type: application/json'
      });
      return;
    }
  }
  next();
});

router.get('/get', function(req, res, next) {
  res.status(200);
  res.send('response GET');
});

router.get('/get/param/:id', function(req, res, next) {
  res.status(200);
  var data = req.params;
  res.send('response GET ' + data.id);
});


router.post('/post', function(req, res, next) {
  var data = req.body;
  res.status(200);
  res.json({'method': 'POST', 'response': data});
});

router.put('/put', function(req, res, next) {
  var data = req.body;
  res.status(201);
  res.json({'method': 'PUT', 'response': data});
});

router.delete('/delete/:id', function(req, res, next) {
  var data = req.params;
  res.status(410);
  res.send('response DELETE' + data.id);
});

module.exports = router;

