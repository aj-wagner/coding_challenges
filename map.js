
   	const a = [1, 2, 3, 4];

	Array.prototype.map = function(callBack){
		var returnArr=[];

		for(var i=0; i<this.length; i++){
			returnArr[i] = callBack(this[i]);
		}
		return returnArr;
	}

	var tempArr = a.filter(function(val){return (val % 2 === 0);});

	console.log(tempArr);