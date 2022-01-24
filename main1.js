
function maxProduct(arr){
	let sArr[arr[0], arr[1]];
	let lArr[arr[0], arr[0], arr[0]];

	for(let i=1; i<arr.length;i++){
		if(arr[i]) < sArr[0]){
			sArr[1] = sArr[0]
		}
	}

}


function getCities(arr){
	const results = {};
	for(let i=0; i<arr.length; i++){
		let city = arr[i].city;
		results[city] = true;
	}
	return Object.keys(results);
}



function getCities(arr){
	const = results = arr.reduce((accum, personObj) => {
		let city = personObj.city;
		accum[city] = true;
		return accum;
	}, {})
	return Object.keys(results);
}


const priceArr = [10, 9, 8,13,4,2];

function max_price(arr=process.argv[2]) {
	if (arr.length < 2) {return console.log("Array not long enough")};

	var profit = arr[1] - arr[0];
	var buy = arr[0];

	for (i=1; i<arr.length-1; i++) {
	    if (buy > arr[i]) { buy = arr[i];};
	    if (profit < (arr[i+1] - buy)) {profit = (arr[i+1]-buy)};
	};

	return profit;
}
// console.log(max_price(priceArr));

const priceArr = [10, 9, 8,13,4,2];
function maxProfit(array){
	if (array.length < 2) {return console.log('Need at least 2 prices')};

	let profit = array[1] - array[0];
	let buy = array[0];

	return array.reduce((profit, val, index, array) =>{

		buy = Math.min(
			buy,
			val
		)

		if(index=1){
			profit = array[1] - array[0]
		}
		else if(index < array.length-1){
			profit = Math.max(
				profit,
				(array[index + 1] - buy)
			)
			console.log(`cur profit: ${profit}`);
			console.log(`val profit: ${(array[index + 1] - buy)}`);
		}

		return profit;
	})

	return profit;
}
console.log(maxProfit(priceArr));




Array.prototype.reduceFunction = function(cb, stpt){

	let accumulator = stpt === undefined ? this[0] : stpt;

	for(let index = 1; index<this.length; index++){
		accumulator = cb(accumulator, this[index]);
	}
	return accumulator;
}	



function maxProfit(arr){
	if(arr.length<2){
		console.log(`Need 2 or more prices`);
		return
	}

	let buy = arr[0];
	let maxProfit = arr[1] - arr[0]

	for(let i=1; i<arr.length-1; i++){
		if(buy > arr[i]){buy = arr[i]}
		if(maxProfit < (arr[i+1] - buy)){maxProfit = (arr[i+1] - buy)}
	}

	return maxProfit;
}


///should try to rewrite the maxProfit





let testArray = [1,2, [3,4,5],[6,7],8];

function flattenArray(arr){
	let resultArr = [];
	flatten(arr, resultArr)
	return resultArr;

	function flatten(array, results){
		for(let i=0; i<array.length; i++){
			if(Array.isArray(array[i])){
				flatten(array[i], results);
			}
			else{
				results.push(array[i]); 
			}
		}
	}
}

// console.log(flattenArray(testArray));






