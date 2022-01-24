
function findMaxArrIndex(arr){
	maxIndex=0;
	
	for(let i = 1; i< arr.length; i++){
		if(arr[maxIndex] < arr[i]){
			maxIndex = i;
		}
	}

	return maxIndex;
}

function getWaterVol( arr ){
	
	if(arr.length<2) return 0;

	let maxI = findMaxArrIndex( arr );
	let leftBound = arr[0];
	let rightBound = arr[arr.length-1];
	
	let totalVol =0;

	for(let i=1; i<maxI; i++){
		if(arr[i]<leftBound){
			totalVol += (leftBound - arr[i])
		}else{
			leftBound = arr[i]
		}
	}

	for(let i=arr.length-2; i>maxI; i--){
		if(arr[i] < rightBound){
			totalVol += (rightBound - arr[i])
		}
		else{
			rightBound = arr[i]
		}
	}

	return totalVol;
}

let waterArr = [4,1,6,4];

console.log(getWaterVol(waterArr));


