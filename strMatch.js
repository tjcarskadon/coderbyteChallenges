w//determine which word in the string has the greatest number of repeated letter.

var testArray = [
	"Call with Howard and Rita about the displays.", //Call l  = 2 
	"Received a 2nd shipment with 9 cameras and there is different tape and neither of the two shipments of 9 do not match", //different 4
	"the new shipment had 9 cameras with only 1 layer of tape and all the tape was not in the same position.  and the sheilds wouldn't stay on.", //cameras, all, position  a,l,i 2 
	"tape was not applied in the same position.  Can be from flush to 3/16th.", //applied, postiion p i =2
	"send more cameras that are perfect.", //cameras a = 2
	"exxxtra letters to see what happens with more than four ffffff", //fffff  f = 6
	"there is different" //different ff ee 4
];

function brute(str) {

	var wordArray = str.toLowerCase().split(" "),
		masterCnt = 0,
		letterCnt = 0,
		answerWord = "",
		equalWords = [];

	for (var c = 0; c < wordArray.length; c++) {

		var search = wordArray[c].toString(),
			repLetters = 0; // get the right word

		for (var i = 0; i < search.length; i++) {


			letterCnt = countLetters(search, search[i]); // count the number of letters in the word
			if (letterCnt > 1) {

				//increment repLetters
				repLetters++;
			}

		}

		if (masterCnt < repLetters) {

			masterCnt = repLetters;
			answerWord = wordArray[c];

		} else if (masterCnt === repLetters && masterCnt !== 0) {

			equalWords.push(wordArray[c]);

		}


	}



	function countLetters(input, searchStr) {

		var pos = input.indexOf(searchStr),
			cnt = 0;

		while (pos !== -1) {

			cnt++;
			pos = input.indexOf(searchStr, pos + 1);


		}

		return cnt;

	}

	if (equalWords.length > 0) {

		var msg = "There are multiple words with " + letterCnt + " repeated letters.";
		return msg;
	} else {

		return "the word with the most repeated letters is: " + answerWord;

	}
}

//test loop:

for (var t = 0, x = testArray.length; t < x; t++) {

	(testArray[t] !== undefined) ? console.log("Test " + t + " result: \n" + brute(testArray[t])): "";
}