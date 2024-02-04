const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'soap', price: 50, quantity: 5},
    {name: 'pent', price: 750, quantity: 2},
    {name: 'shirt', price: 450, quantity: 3},
]

function cartTotal (products){
    let total = 0;
    for(const product of products){
        const thisProduct = product.price * product.quantity;
        total = total + thisProduct;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);