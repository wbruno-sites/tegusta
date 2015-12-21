'use strict';

let products = {
  carne: {
    name: 'Empanada de Carne', description: 'A tradicional empanada de carne moída, típico argentina',
    price: '4,00', url: '/empanada-de-carne.html'
  },
  carnePimenta: {
    name: 'Empanada de Carne com Pimenta', description: 'Todo o sabor da tradicional empanada típico argentina com pimenta',
    price: '4,00', url: '/empanada-de-carne-com-pimenta.html'
  },
  frangoComCatupiry: {
    name: 'Empanada de Frango com Catupiry', description: 'Todo o sabor da tradicional empanada típico argentina com pimenta',
    price: '4,00', url: '/empanada-de-frango-com-catupiry.html'
  },
  palmito: {
    name: 'Empanada de Palmito', description: 'Empanada de palmito',
    price: '4,00', url: '/empanada-de-palmito.html'
  },
  bacalhau: {
    name: 'Empanada de Bacalhau', description: 'Empanada de bacalhau',
    price: '6,00', url: '/empanada-de-bacalhau.html'
  }
};

exports.products = products;
