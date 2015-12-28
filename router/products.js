'use strict';

var router = require('express').Router(),
    products = require('../content').products;

for (let i in products) {
  let product = products[i];

  router.get(product.url, function(request, response) {
    response.render(product.tpl, { title: product.name, description: product.description, price: product.price, url: product.url });
  });
}

module.exports = router;
