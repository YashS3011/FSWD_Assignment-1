//  Create an array of product objects

let cart=[
    { productName: "TV", price: 22000, quantity: 1 },
    { productName: "AC", price: 25000, quantity: 2 },
    { productName: "Buletooth-Speakar", price: 4500, quantity: 1 }
]

//  functions:

//  Add Product
const addProduct = (cart, product) => {
cart.push(product);
};

addProduct(cart,{productName: "Pendrive", price: 1500, quantity: 1})
console.log(cart);

//  Calculate Total
const calculateTotal = (cart)=>{
return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

console.log(calculateTotal(cart));

//  Remove Product
const removeProduct = (cart, productName) => {
return cart.filter(product => product.productName !== productName);
};

cart = removeProduct(cart,"Pendrive");

console.log(cart);

//  Use destructuring and template literals to display a summary of the cart
const logProductDetails=(cart)=>{
cart.forEach(({productName, price, quantity }) => {console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);});
}