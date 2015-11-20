//LetterCountI Coderbyte challenge
/*Have the function LetterCountI(str) take the str parameter being passed and return the 
first word with the greatest number of repeated letters. For example: 
"Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) 
and it comes before ever which also has 2 e's. If there are no words with repeating 
letters return -1. Words will be separated by spaces. 
*/

function LetterCountI(str) {

  
  var wordArray = str.toLowerCase().split(" "),
      masterCnt = 0,
      letterCnt = 0,
      ansWord = "-1",
      equalWords = []; //probably won't need this.
  
 //repeated letter counting function
  function countLetters(input,searchStr) {
    var pos = input.indexOf(searchStr),
        cnt = 0;
    while (pos !== -1) {

     	cnt++;
    	pos = input.indexOf(searchStr, pos+1);
      
    }
    
    return cnt;
  }
  
  //loop to do the comparisions. Out loop gets the word
  
 for (var c = -0; c<wordArray.length; c++) {
  
   	var search = wordArray[c].toString(),
        repLetters = 0;
   //innerloop checks for repeated letters in the word letter by letter
   for (var i = 0; i<search.length; i++) {
    
     letterCnt = countLetters(search,search[i]);
     
     	if (letterCnt > 1) {
         
          repLetters++;
        }
   }
   
   //Check to see the results of the above loop
   if (masterCnt < repLetters) {
    	
     	masterCnt = repLetters;
     	ansWord = wordArray[c];
   } else if (masterCnt === repLetters && masterCnt !== 0) {
    	
     equalWords.push(wordArray[0]);
     
   } //add a case for no matches here
   
 }
  
  if (equalWords.length > 0) {
   //there is more than one word with equal letters.  let's see what happens here
    str = ansWord;
  } else {
   
    	str = ansWord;
  }
  // code goes here  
  return str; 
         
}

console.log(LetterCountI("today is the greatest day ever"));