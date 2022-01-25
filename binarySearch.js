
function binarySearch(targetVale){
    const sortedArray = [-1, 3, 5, 6, 7, 8, 20, 60, 90];

    let leftInd = 0;
    let rightInd = sortedArray.length-1;
    let midPt;

    if (targetVale === leftInd) { return leftInd; }
    else if (targetVale === rightInd) { return rightInd; }

    while (leftInd < rightInd){
        midPt = Math.floor((leftInd+rightInd)/2);

        if (targetVale === sortedArray[midPt]) {
            return midPt;
        }
        else if (targetVale < sortedArray[midPt]) {
            rightInd = midPt-1;
        } else {
            leftInd = midPt+1;
        }
    }
    return -1;
};

console.log( binarySearch(20) );