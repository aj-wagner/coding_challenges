/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/


const inputArray = [1, 2, 0];

function missingInt(array){
    if (array.length < 2) { return -1; }
    let holdingArray = [];

    for (let i=0; i < array.length; i++){
        if (array[i] >  0) {
            holdingArray[array[i]] = 'X';
        }
    }

    for (let i=1; i < holdingArray.length + 1; i++){
        if (holdingArray[i] !=  'X') {
            return i;
        }
    }

    return -1;
};

console.log( missingInt(inputArray) );