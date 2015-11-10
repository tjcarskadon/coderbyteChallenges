/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet 
(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
finally return this modified string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

needs to keep any special characters or punction so need to keep any "words"
*/



function LetterChanges(str) { 

 var	startLetter = "",
      	strCode = "",
      	holder="";
      	nextLetter ="";
  
  

  for (i = 0, x = str.length; i < x; i++) {
   		
    	console.log(str[i]);
    	strCode = str.charCodeAt(i);  //get the char code so it can be incremented
    	startLetter = str.charAt(i); // get the starting letter 
    	nextLetter = String.fromCharCode(strCode+1); //increment the start letter by 1

    	switch (startLetter) {

    		case 'z':
    			  holder+='A';
    			  break;
    		case 'd':
    			holder+='E';
    			break;
    		case 'h':
    			holder+='I';
    			break;
    		case 'n': 
    			holder+='N';
    			break;
    		case 't':
    			holder+='U';
    			break;
    		default: 

    			if (startLetter.match(/[a-z]/gi) == null) {

    				holder+=startLetter;
    			} else {

    				holder+=nextLetter;
    			}

      	}
    
  }
str = holder;
return str; 
         
}

console.log(LetterChanges('test! test! str*ng'));  

