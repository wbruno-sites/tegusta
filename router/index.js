'use strict';

let router = require('express').Router();

router.get('/', function(request, response, next) {
  response.render('home', {});
});

module.exports = router;
