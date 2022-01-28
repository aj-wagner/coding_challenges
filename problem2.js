//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

//Follow-up: what if you can't use division?



const inputArray = [1, 2, 3, 4, 5];

function productArray(array){
    if (array.length < 2) { return false; }
    let outputArray = [];
    let totalProduct = array[0];

    for (let i=1; i < array.length; i++){
        totalProduct= totalProduct*array[i];
    }

    for (let i=0; i < array.length; i++){
        outputArray[i] = totalProduct/array[i];
    }
    return outputArray;
};

//without division, it creates a nested for loops
function productArrayNoDiv(array){
    if (array.length < 2) { return false; }
    let outputArray = [];

    for (let i=0; i < array.length; i++){
        let runningProduct = 1;

        for (let c=0; c < array.length; c++){
            if (i!=c){
                runningProduct = runningProduct*array[c];
            }
        }
        outputArray[i] = runningProduct;
    }

    return outputArray;
};

console.log( productArray(inputArray) );
console.log( productArrayNoDiv(inputArray) );