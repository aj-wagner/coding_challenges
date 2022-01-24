
/*
//way 1
function VehicleConstructor(name, numWheels, numPass, speed){
	const vehicleObj = {};

	vehicleObj.name = name;
	vehicleObj.numWheels = numWheels;
	vehicleObj.numPass = numPass;
	vehicleObj.speed = speed;

	return vehicleObj;
}


//way 2//
const vehiclePrototype = {
		accelerate: function(){
		vehicleObj.speed+=1;
	}
}

function VehicleConstructor(name, numWheels, numPass=0, speed=0){


	const vehicleObj = Object.create(vehiclePrototype);

	vehicleObj.name = name;
	vehicleObj.numWheels = numWheels;
	vehicleObj.numPass = numPass;
	vehicleObj.speed = speed;
	vehicleObj.makeNoise = function(){
		console.log('make some noise')
	};

	return vehicleObj;
}


//way 3
const VehicleConstructor = (function(){
	const vehiclePrototype = {
		accelerate: function(){
			vehicleObj.speed+=1;
		}
	}

	return function VehicleConstructor(name, numWheels, numPass=0, speed=0){
		const vehicleObj = Object.create(vehiclePrototype);

		vehicleObj.name = name;
		vehicleObj.numWheels = numWheels;
		vehicleObj.numPass = numPass;
		vehicleObj.speed = speed;
		vehicleObj.makeNoise = function(){
			console.log('make some noise')
		};

		return vehicleObj;
	}
})();
*/


//way 4
function VehicleConstructor(name, numWheels, numPass=0, speed=0){

	this.name = name;
	this.numWheels = numWheels;
	this.numPass = numPass;
	this.speed = speed;
	this.makeNoise = function(){
		console.log('make some noise')
	};
}

VehicleConstructor.prototype.accelerate = function(){
	this.speed+=1;
	return this.speed;
}




const v1 = VehicleConstructor('sedan', 4);
const v2 = VehicleConstructor('big rig', 16);
const v3 = VehicleConstructor('school bus', 24);

v1.makeNoise = function(){
	console.log('ring ring!');
}

v2.makeNoise = function(){
	console.log('Honk Honk!');
}

v3.pickUpPassenger = function(numPass){
	v3.numPass+=numPass;
}

