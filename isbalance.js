
function isBalance(arr){
	let lSum=arr[0];
	let rSum=arr[arr.length-1];
	let lInd=0;
	let rInd=arr.length-1;

	while( (rInd-lInd)>1 ){
		if(lSum > rSum){
			rInd--;
			rSum += arr[rInd];
		}
		else{
			lInd++;
			lSum += arr[lInd];
		}
	}
	return(rSum === lSum);
}

//something isn't right here
function balancePoint(arr){
	let sum1 = arr.reduce(function (accum, val){
		return accum + val;
	});

	let sum2 = 0;
	for (let i=0; i < arr.length-1; i++){
		if(sum1 === sum2) {return true;}
		let current = arr[i];
		sum2 += current;
		sum1 -= current;
	}

	return false;
}


console.log(isBalance([1,2,3,4,10]));

console.log(balancePoint([1,2,3,4,10]));


