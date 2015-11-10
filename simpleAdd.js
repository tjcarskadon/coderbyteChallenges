//write a function that adds the numbers from 1 to a given argument.


function simpleAddition (endArg) {


	var sArg = 0;
	


	for (var i = 0; i <=endArg; i++) {

		sArg += i;
		//console.log(sArg);
		
	}

	return sArg;

}
console.log(simpleAddition(12));