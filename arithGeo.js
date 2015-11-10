//determine if numbers are in an arithmetic or geometric progression.

//arithmetic progressions are incremented by a fixed number 5,7,9,11 etc all incremented
//by 2

//geometric progressions are multiplied by a given ratio
//2,6,18,54 are all multiplied by 3 

//to determine if numbers in an array follow a particular sequecne and if that
//sequence is arithmetic or geometric

// diff1 = index 1 - index 0
// diff2 = index 2- index 1
// diff1 == diff2 ? arithmetic : 
//div1 = index 0/index 1
//div2 = index 1/index 2
//div1 == div2 ? geometirc : neither

//need to run this comparision on the entire array so make two functions that
//check this. loop the array and return true if all meet the condition else return false
//if false then check for geo.  if geo is false then it is neither.
//Struggled with this one a bit.  Took me 59 min because I had two big mistakes:
//first was taht I was getting NAN because I wasn't accounting for the condition
//in the loop where arr[i+1] would exceed the loop size.  
//next was and issue where I thought I was doing the math wrong but had a simple
//error instead.  Sorted those and solved it but was too slow.
//will rewrite this using a non looping method and try the challenge again tomorrow

function ArithGeo(arr) { 

  // code goes here  
  
  function arithCheck(arr1) {
   
    var diff = arr1[1] - arr1[0],
        bool;

    
   
    for (var i = 1, x = arr1.length-1; i < x ; i++) {
      	
      	var val1 = arr1[i+1],
      		val2 = arr1[i];
      	 
    	if (val1 - val2 != diff) {
         
          	bool = false;
          	return bool;
        } else {
         
          	bool = true;
        }
    	
    }
    return bool;
  }
  
  
  function geoCheck(arr2) {
   
    var ratio = arr2[0]/arr2[1],
    	bool;
    	
    for(var i = 0, x = arr2.length-1; i<x; i++) {
    	

      if(arr2[i] / arr2[i+1] != ratio) {
        	
        	bool = false;
        	return bool;
        
      } else {
      	
        bool = true;
      }
    }
    
    return bool;
  }
  
  var check1 = arithCheck(arr),
      check2 = geoCheck(arr);
  
  
  return (check1 == true) ? "Arithmetic" : (check2 == true) ? "Geometric" : -1;        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(ArithGeo([5,10,15]))   