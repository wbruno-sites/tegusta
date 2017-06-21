'use strict';

let products = {
  carne: {
    name: 'Empanada de Carne',
    description: 'A tradicional empanada de carne moída, típico argentina. Carne moída, cebola, azeitona, uva passa, páprica doce e picante, cominho, pimenta do reino, orégano e salsinha.',
    tpl: 'empanada-de-carne',
    price: '6,00',
    url: '/empanada-de-carne.html'
  },
  carnePimenta: {
    name: 'Empanada de Carne com Pimenta',
    description: 'Todo o sabor da tradicional empanada típico argentina com pimenta calabresa, cebola, azeitona, uva passa, páprica doce e picante, cominho, pimenta do reino, orégano e salsinha.',
    tpl: 'empanada-de-carne-com-pimenta',
    price: '6,00',
    url: '/empanada-de-carne-com-pimenta.html'
  },
  carneSeca: {
    name: 'Empanada de Carne Seca',
    description: 'Nossa empanada de carne seca, cebola, margarina, páprica doce e picante, salsinha, orégano e requeijão da marca catupiry.',
    tpl: 'empanada-de-carne-seca',
    price: '7,00',
    url: '#'
  },
  frangoComCatupiry: {
    name: 'Empanada de Frango com Catupiry',
    description: 'Frango desfiado, cebola, margarina, salsinha, páprica doce e picante, orégano e requeijão da marca Catupiry.',
    tpl: 'empanada-de-frango-com-catupiry',
    price: '6,00',
    url: '/empanada-de-frango-com-catupiry.html'
  },
  calabresa: {
    name: 'Empanada de Calabresa',
    description: 'Calabresa especial, azeitonas, cebola, páprica doce e picante, orégano, salsinha e pimenta calabresa.',
    tpl: 'empanada-de-calabresa',
    price: '6,00',
    url: '/empanada-de-calabresa.html'
  },
  palmito: {
    name: 'Empanada de Palmito',
    description: 'Palmito selecionado, molho do chefe (cebola, leite, páprica doce e picante)',
    tpl: 'empanada-de-palmito',
    price: '6,00',
    url: '/empanada-de-palmito.html'
  },
  bacalhau: {
    name: 'Empanada de Bacalhau',
    description: 'Bacalhau desfiado e purê de batatas (leite, manteiga, cebola, creme de leite e salsinha)',
    tpl: 'empanada-de-bacalhau',
    price: '10,00',
    url: '/empanada-de-bacalhau.html'
  },
  quatroQueijos: {
    name: 'Empanada de Quatro Queijos',
    description: 'Queijo mussarela, queijo parmesão, queijo branco, requeijão da marca catupiry e orégano.',
    tpl: 'empanada-de-quatro-queijos',
    price: '8,00',
    url: '/empanada-de-quatro-queijos.html'
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
    description: 'Veja o nosso cardápio de empanadas argentinas. Encomende o sabor de empanada que você mais gosta.',
    tpl: 'cardapio',
    url: '/cardapio.html'
  }
};

exports.pages = pages;
