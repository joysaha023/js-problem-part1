//////////// Task 1 /////////////////

function celToFaren(cel){
    let farenheit = (cel * 1.8) + 32;
    return farenheit;
}

let a = 30;

const result = celToFaren(a);
console.log(`${a} degree celsius is equal to ${result} degree farenheit`);