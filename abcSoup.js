//Coderbyte challenge "Alphabet Soup"
//Have the function AlphabetSoup(str) take the str string parameter being passed and
//return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
//Assume numbers and punctuation symbols will not be included in the string. 

function alphabetSoup(str) {

	str = str.toLowerCase().split('').sort().join('');

	return str;

}

console.log(alphabetSoup("inPutStringHere"))