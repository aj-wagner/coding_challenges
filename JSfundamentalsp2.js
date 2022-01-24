
function sumFromTo(x, y){
	let sum=0;

	for(let i=x; x<=y; i++){
		sum =+i;
	}

	return sum;
}

function maxArr(arr){
	let max=arr[0];

	for(let i=0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
}

function arrAve(arr){
	let sum=0;

	for(let i=0; i<arr.length; i++){
		sum+=arr[i];
	}

	return sum/arr.length;
}


var func1 = function(x, y){
	let sum=0;

	for(let i=x; x<=y; i++){
		sum =+i;
	}
	return sum;
}

var func2 = function(arr){
	let max=arr[0];

	for(let i=0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
}

var func3 = function(arr){
	let sum=0;

	for(let i=0; i<arr.length; i++){
		sum+=arr[i];
	}

	return sum/arr.length;
}

var mathFuncsObj = {
	sumFromTo: func1,
	maxArr: func2,
	arrAve: func3
}


function person(name){
	this.name = name;
	this.distance_traveled = 0;
}

person.prototype.say_name = function(){
	console.log(this.name);
}
person.prototype.say_something = function(string){
	console.log(`${this.name} says ${string}`);
}
person.prototype.walk = function(){
	console.log(`${this.name} is walking`);
	this.distance_traveled += 3; 
}
person.prototype.run = function(){
	console.log(`${this.name} is running`);
	this.distance_traveled += 10; 
}
person.prototype.crawl = function(){
	console.log(`${this.name} is crawling`);
	this.distance_traveled += 1; 
}

var aPerson = new person('AJ');

aPerson.say_name();

