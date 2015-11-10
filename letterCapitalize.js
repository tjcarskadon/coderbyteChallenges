//take in a string and output the stame string with the first letter of each word capitalied.
//assumes that the first letter starts after only 1 space.

function LetterCapitalize(str) { 

  // code goes here  

  var strA = str.split(' ');

  for (var i = 0, x = strA.length; i < x; i++) {

  	strA[i] = strA[i].charAt(0).toUpperCase() + strA[i].slice(1);

  }

  return strA; 
         
}
console.log(LetterCapitalize('test string'));