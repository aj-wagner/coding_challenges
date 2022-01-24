function vehicleConstructor(name,numWheels, numPassengers){
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.makeNoise = function(){
		console.log('honk');
	}
}

var bike1 = new vehicleConstructor('AJs Bike', 2, 1);

bike1.makeNoise = function(){
	console.log('ring ring!');
}

var sedan = new vehicleConstructor('AJs sedan', 4, 5);

sedan.makeNoise = function(){
	console.log('Honk Honk');
}

var bus = new vehicleConstructor('AJs bus', 6, 1);
bus.addPassengers = function(addPass){
	this.numPassengers += addPass;
}

bus.addPassengers(5);

console.log(bus.numPassengers);
