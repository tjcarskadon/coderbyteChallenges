//This file has a couple of snippts for factorials

//this calculates the factorial on the input number in an interative fashion.
function itFact(num) {

  var result = 1;
  for (var i=2; i <= num;i++) {
      result *= i;
      
  }
 return result;

}


//this calculates the factorial on the input number in a recursive fashion.
function reFact(n) {
  if(n === 0) {
    return 1;
  } else {
    return n*reFact(n-1);
  }
}

//call them with a console.log(function(param))
