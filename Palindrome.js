//Coderbyte Palidrome challenge
/*Have the function Palindrome(str) take the str parameter being passed 
and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the 
string false. For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string. 

For the Challenge I actually wrote this as one line ternary style in the return
statement but this seems more readable.
*/

function palindrome(str) {

	if (str.toLowerCase().replace(/\s/g,'') == str.toLowerCase().replace(/\s/g,'').split('').reverse().join('')) {

		return true;
	} else {

		return false;
	}
}

console.log(palindrome("never odd"));