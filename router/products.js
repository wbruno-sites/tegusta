'use strict';

var router = require('express').Router(),
    products = require('../products').products;

for (let i in products) {
  let product = products[i];

  router.get(product.url, function(request, response) {
    response.render(product.tpl, { title: product.name, description: product.description, price: product.price });
  });
}

module.exports = router;
