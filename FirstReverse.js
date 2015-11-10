//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) { 

  // code goes here  
  str= str.split('').reverse().join('');
  return str; 
         
}