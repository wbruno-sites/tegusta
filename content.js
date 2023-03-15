'use strict';

let products = {
  carne: {
    name: 'Empanada de Carne',
    description: 'A tradicional empanada de carne moída, típico argentina. Carne moída, cebola, azeitona, uva passa, páprica doce e picante, cominho, pimenta do reino, orégano e salsinha.',
    tpl: 'empanada-de-carne',
    price: '12,00',
    url: '/empanada-de-carne.html'
  },
  carnePimenta: {
    name: 'Empanada de Carne com Pimenta',
    description: 'Todo o sabor da tradicional empanada típico argentina com pimenta calabresa, cebola, azeitona, uva passa, páprica doce e picante, cominho, pimenta do reino, orégano e salsinha.',
    tpl: 'empanada-de-carne-com-pimenta',
    price: '12,00',
    url: '/empanada-de-carne-com-pimenta.html'
  },
  frangoComCatupiry: {
    name: 'Empanada de Frango com Catupiry',
    description: 'Frango desfiado, cebola, margarina, salsinha, páprica doce e picante, orégano e requeijão da marca Catupiry.',
    tpl: 'empanada-de-frango-com-catupiry',
    price: '12,00',
    url: '/empanada-de-frango-com-catupiry.html'
  },
  palmito: {
    name: 'Empanada de Palmito',
    description: 'Palmito selecionado, molho do chefe (cebola, leite, páprica doce e picante)',
    tpl: 'empanada-de-palmito',
    price: '12,00',
    url: '/empanada-de-palmito.html'
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
