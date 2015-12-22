'use strict';

var router = require('express').Router(),
    pages = require('../content').pages;

for (let i in pages) {
  let page = pages[i];

  router.get(page.url, function(request, response) {
    response.render(page.tpl, { title: page.name, description: page.description, price: page.price });
  });
}

module.exports = router;
