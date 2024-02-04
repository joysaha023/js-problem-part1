//////////// Task 1 /////////////////

// function celToFaren(cel){
//     let farenheit = (cel * 1.8) + 32;
//     return farenheit;
// }

// let a = 30;

// const result = celToFaren(a);
// console.log(`${a} degree celsius is equal to ${result} degree farenheit`);

//////////////// Task 2 ////////////////////





////////////// Task 3 ///////////////////
function checkVowel(sentence){
    let reg = /["a", "e", "i", "o", "u"]/gi;
    let test = sentence.match(reg);
    let char = test.length;
    return char;
}

const a = "The quick fox jump over the lazy dog."
const result = checkVowel(a);
console.log("Number of the vowel is: ", result);