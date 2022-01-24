
//reduce

const array = [1,2,3,4];

// const sum = array.reduce((currentSum, currentVal)=> {
// 	return currentSum + currentVal;
// });

// console.log(sum);

Array.prototype.reduce = function(callBack, stpt){
	let index = 0;
	let accumulator = stpt;

	if(stpt === undefined){
		index = 1;
		accumulator = this[0];
	}

	for(index; index<this.length; index++){
		accumulator = callBack(accumulator, this[index]);
	}	
	return accumulator;
}

console.log(array.reduce(function(accum, val){
	return accum + val;
}))