var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {
  const results = [{'test': 'toast'}]

  res.json({
    results: results
  });
});

module.exports = router;