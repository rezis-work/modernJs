// exporting module
console.log('Exporting module');

// console.log('start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuatity = 23;

export { totalPrice, totalQuatity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
