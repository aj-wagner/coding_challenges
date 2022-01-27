//Given a list of numbers and a number target value, return whether any two numbers from the list add up to that target value.
//For example, given [10, 15, 3, 7] and target value of 17, return true since 10 + 7 is 17.



const searchArray = [10, 15, 3, 7];

function findingPair(array, targetVale){
    if (array.length < 2) { return false; }
    let valueOf;
    
    for (let i=0; i < array.length; i++){
        valueOf = targetVale - array[i];
        if (array.indexOf(valueOf) > -1) { return true; }
    }

    return false;
};

console.log( findingPair(searchArray, 4) );