'use strict';

var router    = require('express').Router(),
    moment    = require('moment-timezone'),
    products  = require('./products'),
    pages     = require('./pages'),
    mail      = require('./mail'),
    geo       = require('./geo');


router.get('/', function(request, response) {
  response.render('home', {
    page: 'home',
    title: '',
    url: '',
    description: 'Encomende empanadas argentinas. Entregamos empanadas argentinas para toda a cidade de São Paulo.'
  });
});

router.use('/', pages);
router.use('/', products);

router.get(/\/(index\.html|empanada)$/, function(request, response) {
  response.redirect(301, '/');
});

router.get('/telephone', function(req, res) {
  var now = moment().tz('America/Sao_Paulo'),
      until = moment(now.format('YYYY-MM-DD') + 'T13:59:00Z').tz('America/Sao_Paulo');

  res.json({
    now: now,
    until: until,
    before: now.isBefore(until),
    telephone: now.isBefore(until) ? '(11) 3782-2391' : '(11) 9 6309-9227'
  });
});

router.get('/geo/:pos', geo.locate);

router.post('/', mail.send);

module.exports = router;
