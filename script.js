// normal import //

// importing module
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qt);

console.log('Importing modules');

// import as class //

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// default import //

import add, { cart } from './shoppingCart.js';

add('pizza', 1);
add('bread', 5);
add('apples', 4);
console.log(cart);
