
const arrPro = [1, 3, 4, 2];

function getProductArr( arr ){
	//build ar arroy of before products
	const beforeProds = [];
	let rollingProd = 1;

	for(let i =0; i < arr.length; i++){
		beforeProds[i] = rollingProd;
		rollingProd *= arr[i];
	}

	const afterProds = [];
	rollingProd = 1;

	for(let i = arr.length-1; i >= 0; i--){
		afterProds[i] = rollingProd;
		rollingProd *= arr[i];
	}

	console.log(beforeProds);
	console.log(afterProds);

	const finalProds = [];

	for(let i=0; i < arr.length; i++){
		finalProds[i] = beforeProds[i] * afterProds[i];
	}

	return finalProds;
}

console.log( getProductArr(arrPro) );
