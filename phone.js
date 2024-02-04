const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'poco', price: 50000, camera: '120mp', color: 'black'},
    {name: 'oppo', price: 10000, camera: '120mp', color: 'black'},
    {name: 'walton', price: 6000, camera: '120mp', color: 'black'},
    {name: 'realme', price: 16000, camera: '120mp', color: 'black'},
]

function expensive(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const price = expensive(phones);

console.log(price)