//////////// Task 1 /////////////////

// function celToFaren(cel){
//     let farenheit = (cel * 1.8) + 32;
//     return farenheit;
// }

// let a = 30;

// const result = celToFaren(a);
// console.log(`${a} degree celsius is equal to ${result} degree farenheit`);

//////////////// Task 2 ////////////////////
function findRepeatNum (numbers){
    const countMap = {};

    for (let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];

        if (!countMap[currentNumber]){
            countMap[currentNumber] = 1;
        }else{
            countMap[currentNumber]++;
        }
    }

    for (const number in countMap){
        console.log(`${number} is repeated ${countMap[number]}times`);
    }
}

const numB = [5,6,11,12,98, 5];

const result = findRepeatNum(numB);
console.log(result);


////////////// Task 3 ///////////////////
// function checkVowel(sentence){
//     let reg = /["a", "e", "i", "o", "u"]/gi;
//     let test = sentence.match(reg);
//     let char = test.length;
//     return char;
// }

// const a = "The quick fox jump over the lazy dog."
// const result = checkVowel(a);
// console.log("Number of the vowel is: ", result);

////////////////// Task 4 //////////////////
// function findTheLongest(str){
//     let array1 = str.match(/\w[a-z]{0,}/gi);
//     var resultlong = array1[0];

//     for(var x =1; x < array1.length; x++){
//         if(resultlong.length < array1[x].length){
//             resultlong = array1[x];
//         }
//     }
//     return resultlong;
// }

// const words = "I am learning Programming to become a programmer";
// const result = findTheLongest(words);
// console.log(result);

////////////////////// Task 5 ///////////////////
// function generateMath(min, max){
//     const randomDec = Math.random();
//     const randomN = min + randomDec * (max - min);

//     return Math.round(randomN);
//     // return randomN;
// }

// const randomNum = generateMath(10, 20);
// console.log("Random Number: ", randomNum);