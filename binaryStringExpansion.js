

function binStr(str, array=[]){
	let i = str.indexOf('?');
	if(i<0){
		array.push(str);
		return array;
	}
	else{
		let leftSide = str.slice(0, i);
		let rightSide = str.replace(i+1);

		binStr(leftSide + '0' + rightSide, array);
		binStr(eftSide + '1' + rightSide, array);
	}

	return array;
}