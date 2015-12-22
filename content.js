'use strict';

let products = {
  carne: {
    name: 'Empanada de Carne',
    description: 'A tradicional empanada de carne moída, típico argentina',
    tpl: 'empanada-de-carne',
    price: '4,00',
    url: '/empanada-de-carne.html'
  },
  // carnePimenta: {
  //   name: 'Empanada de Carne com Pimenta',
  //   description: 'Todo o sabor da tradicional empanada típico argentina com pimenta',
  //   tpl: 'empanada-de-carne-com-pimenta',
  //   price: '4,00',
  //   url: '/empanada-de-carne-com-pimenta.html'
  // },
  frangoComCatupiry: {
    name: 'Empanada de Frango com Catupiry',
    description: 'Todo o sabor da tradicional empanada típico argentina com pimenta',
    tpl: 'empanada-de-frango-com-catupiry',
    price: '4,00',
    url: '/empanada-de-frango-com-catupiry.html'
  },
  calabreza: {
    name: 'Empanada de Calabreza',
    description: 'Empanada de Calabreza',
    tpl: 'empanada-de-cababreza',
    price: '4,00',
    url: '/empanada-de-cababreza.html'
  },
  palmito: {
    name: 'Empanada de Palmito',
    description: 'Empanada de palmito',
    tpl: 'empanada-de-palmito',
    price: '4,00',
    url: '/empanada-de-palmito.html'
  },
  bacalhau: {
    name: 'Empanada de Bacalhau',
    description: 'Empanada de bacalhau',
    tpl: 'empanada-de-bacalhau',
    price: '6,00',
    url: '/empanada-de-bacalhau.html'
  }
};

exports.products = products;

let pages = {
  historia: {
    name: 'História das Empanadas Argentinas',
    description: 'Saiba a história',
    tpl: 'historia',
    url: '/historia.html'
  },
  cardapio: {
    name: 'Cardápio dos sabores',
    description: 'Saiba a história',
    tpl: 'cardapio',
    url: '/cardapio.html'
  }
};

exports.pages = pages;
