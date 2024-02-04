// function alphabet_order(str){
//     return str.split('').sort().join('');
// }

// console.log(alphabet_order("webmaster"));



// function reverseNumber(n){
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// let num = 32243;
// let result = reverseNumber(num);
// console.log(result);


// function upperCase (str){
//     let array1 = str.split(' ');

//     let newarra1 = [];

//     for(let x = 0; x < array1.length; x++){
//         newarra1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarra1.join(' ');
// }

// let word = "that was the self practice";

// let result = upperCase(word);
// console.log(result);

function vowelCount(str){
    let vowelList = 'aeiouAEIOU';

    let vcount = 0;

    for(let x = 0; x < str.length; x++){
        if(vowelList.indexOf(str[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}

let word = "The quick brown fox";
let result = vowelCount(word);
console.log(result);