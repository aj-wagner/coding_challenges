function runningLogger(){
	console.log('I am running!');
}

function multiplyByTen(val){
	return val * 10;
}

//console.log(multiplyByTen(5));

function stringReturnOne(){
	return 'hard coded string 1';
}

function stringReturnTwo(){
	return 'hard coded string 2';
} 

function caller(func){
	if(typeof func === 'function'){
		func();
	}
}

function myDoubleConsoleLog(func1, func2){
	if(typeof func1 === 'function' && typeof func2 === 'function'){
		console.log(func1() +' '+ func2());
	}
}

function caller2(func){
	console.log('starting');
	setTimeout(function(){
		if(typeof func === 'function'){
			func();
		}
	}, 2000);

	console.log('ending?');
	return 'interesting';
}