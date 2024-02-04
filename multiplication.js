function shopping(shirt, pent, shoe){
    let perShirt = 500;
    let perPent = 800;
    let perShoe = 900;

    const shirtTotalP = shirt * perShirt;
    const pentTotalP = pent * perPent;
    const shoeTotalP = shoe * perShoe; 

    const totalPrice = shirtTotalP + pentTotalP + shoeTotalP;

    return totalPrice;
}

const shoping = shopping(2, 1, 2);
console.log(shoping);