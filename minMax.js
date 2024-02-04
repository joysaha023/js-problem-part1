const heights = [54, 48, 23, 10, 43, 1, 66, 79, 93];

function getMax(numbers){
    let a = numbers[0];
    for(const num of numbers){
        if(num < a){
            a = num;
        }
    }
    return a;
}

const max = getMax(heights);
console.log("max value of array: ", max);