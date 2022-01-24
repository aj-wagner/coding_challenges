
   	const a = [1, 2, 3, 4];

	Array.prototype.filter = function(callBack){
	 	var newArr=[];

		this.forEach(function(current){
			if(callBack(current)){
				newArr.push(current);
			}
		});
		return newArr;
	}

	var tempArr = a.map(function(val){return (val + 2);});

	console.log(tempArr);