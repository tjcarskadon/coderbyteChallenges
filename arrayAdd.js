//Using the JavaScript language, have the function 
//ArrayAdditionI(arr) take the array of numbers stored in arr and 
//return the string true if any combination of numbers in the array can 
//be added up to equal the largest number in the array, otherwise return 
//the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] 
//the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements,
//and may contain negative numbers. 

//Build the test cases first.



//test dataset 
var testArray= [[1,2,3,100],  //false
				[3,5,8,-1,12], //true
				[4,6,5,10], //true
				[10,12,50,1000], //false
				[7,9,11,-5,10,27], //true
				[1,3,5,4,77], //false
				[10,11,17,4,25], //true
				[10,20,30,40,100], //true
				[31,2,90,50,7], //true
				[1,2,3,4,5,15], //true
				[59,49,1,0,7,4],// false 
				[54,49,1,0,7,4], //true
				[10,12,500,1,-5,1,0]
		];


function getMaxOfArray(numArray) {
	return Math.max.apply(null,numArray);
}



function ArrayAdditionI(arr,target, skip) {

	var targIndex = arr.indexOf(target),  //get the index of the target
		chk,
		conf;

		arr.splice(targIndex,1); //remove the target from the array.

		//check to see if there is a zero in the array becuase if so it will be true since target + 0 will equal target
		if (arr.indexOf(0)) {

			return true;
		}

		chk = arr.reduce(function(a,b) {
			return a+b;
		});
		conf = chk === target ? chk : chk - target;
		arr.push(target);
		return arr.indexOf(conf) !== -1 || arr.indexOf(conf*-1) !== -1 ? true : false;


}
//test application:
for (var i =0 ,x =testArray.length; i<x; i++) {

	var max = getMaxOfArray(testArray[i]);
	console.log("Teting array " + i + "\nWhose values are: " + testArray[i] + "\nWith a max value of = " + max);
	testArray[i] != undefined ? console.log("Test Result = " + ArrayAdditionI(testArray[i],max) + "\n") : console.log("\n last element undefined");
}

