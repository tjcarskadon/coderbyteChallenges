//Take in a string and find the longest word.  

/* The Question
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

function longWord(sen) {		
  
  var strArray = sen.split(" "),		//make an array of the string for looping
      strLen = strArray.length,			//cache the array length
      history = strArray[0].replace(/[^\w\s]/gi,'');				//set the first valut to use in the comparison
      
      for (var i=0; i < strLen; i++) {		//loop

     	var chkThis = strArray[i].replace(/[^\w\s]/gi,'');  // cache the current value and filter for punctuation


      	if (history.length < chkThis.length) {

      		history = chkThis; 

      	} else if (history.length >= chkThis.length) {

      		continue;

      	}

           
      }
      sen = history;
      return sen;
}
//these are here for testing and were not part of the coderbyte challenge
//msg = prompt('Enter a string');
//var a = longWord(msg);
//alert(a);

var senArray = [
"hello world", //hello
"this is some sort of sentence", //sentence
"longest word!!", //longest
"a beautiful sentence^&!",  //beautiful 
"oxford press", //oxford
"123456789 98765432", //123456789
"letter after letter!!", //letter
"a confusing /:sentence:/[ this is not!!!!!!!~"], //confusing
answers = [
"hello",
"sentence",
"longest",
"beautiful",
"oxford",
"123456789",
"letter",
"confusing"
];



//test function - fucntion should take in an array of scentences and an array of correct answers, loop thru each and confirm if the longest word was found in each.  It has to know what the logest word is as well.  Then it should out put the answer and if the answer was correct or not.  Using a message like "Test one True or False.  Correct answer = Answer"

function testLongWord (testArray,key) {

	//set some vars and do some caching
	 var testLen = testArray.length,
	 	keyLen = key.length,
	 	results = [],
	 	correctAnsCnt = [],
	 	incorrectAnsCnt= [];  


		//run each scentence thru longest word and get an array of answers

	 	for(i = 0; i < testLen; i++) {

	 		results.push(longWord(testArray[i]));


		}
		var chkWord = results[0];
		
		


		// check those answers against the key, if the answer is correct put a mesage saying so, then store the correct answers in a correct answer array.  If the answer doesn't match then store it in a different array.after all the correct answers are logged out log out the total correct and total incorrect.

		//There is some error with how chkWord is being incremented. 
		for(var i = 0; i < keyLen; i++) {


			if (chkWord == key[i]) {

				//the answer is right so store that log that out.
				console.log("Test " + i==0? 1: i + " was correct.  Test word: " + chkWord + "\n" +"Answer: " + key[i]);
				
				correctAnsCnt.push(chkWord);
				chkWord = results[i+1]; // increment to the next word in the results list 
				

			} else {

				//the word doesn't match so check load it in the wrong answer array
				incorrectAnsCnt.push(chkWord);
				chkWord = results[i+1];
			} 


		}

		//log out the totals
		console.log("There were " + correctAnsCnt.length + " correct answers and \n" +
			incorrectAnsCnt.length + " incorrect answers.");	 	

}
testLongWord(senArray, answers);

