function personConstructor(name){
	this.name = name;
	this.distance_traveled = 0;
}

personConstructor.prototype.say_name = function(){
	console.log(this.name);
}
personConstructor.prototype.say_something = function(string){
	console.log(`${this.name} says ${string}`);
}
personConstructor.prototype.walk = function(){
	console.log(`${this.name} is walking`);
	this.distance_traveled += 3; 
}
personConstructor.prototype.run = function(){
	console.log(`${this.name} is running`);
	this.distance_traveled += 10; 
}
personConstructor.prototype.crawl = function(){
	console.log(`${this.name} is crawling`);
	this.distance_traveled += 1; 
}

var aPerson = new personConstructor('AJ');

//aPerson.say_name();

function ninjaConstructor(){
	this.name = null,
	this.cohort = null,
	this.beltLevel = 'yellow-belt'
}

ninjaConstructor.prototype.levelUp = function(){
	if(this.beltLevel == 'yellow-belt'){
		this.beltLevel = 'orange-belt';
	}
	else if (this.beltLevel == 'yellow-belt' ){
		this.beltLevel = 'orange-belt';
	}
	else if (this.beltLevel == 'orange-belt' ){
		this.beltLevel = 'green-belt';
	}
	else if (this.beltLevel == 'green-belt' ){
		this.beltLevel = 'blue-belt';
	}
	else if (this.beltLevel == 'blue-belt' ){
		this.beltLevel = 'brown-belt';
	}
	else if (this.beltLevel == 'brown-belt' ){
		this.beltLevel = 'red-belt';
	}
	else if (this.beltLevel == 'red-belt' ){
		this.beltLevel = 'black-belt';
	}				
}

var ninja = new ninjaConstructor();

ninja.levelUp();
console.log(ninja.beltLevel);
