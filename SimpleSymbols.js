function SimpleSymbols(str) {
	
	var arr = str.match(/[\+\D\+]/gi);

	for (var i = 0, x = arr.length; i<x; i++) {

		if(arr[i] == "+" && arr[i+1] != "=" && arr[i+2] == "+") {

			return true;
		} else {

			return false;
		}


	}



}

console.log(SimpleSymbols("+a="));