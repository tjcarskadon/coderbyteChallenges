//Ex oh
/*Have the function ExOh(str) take the str parameter being passed 
and return the string true if there is an equal number of x's and o's, 
otherwise return the string false. Only these two letters will be entered in 
the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" 
then the output should return false because there are 6 x's and 5 o's. 
*/

//failed test cases for "x" and for "o" need to add edge case for null?

function ExOh(str) { 

  // code goes here 
  
  return str.match(/[x]/gi).length === str.match(/[o]/gi).length? true : false;
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(ExOh("xxoo"));   