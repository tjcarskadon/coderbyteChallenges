function ABCheck(str) { 

/*Have the function ABCheck(str) take the str parameter being passed and r
eturn the string true if the characters a and b are separated by exactly 3 places
anywhere in the string at least once (ie. "lane borrowed" would result in true 
because there is exactly three characters between a and b). 
Otherwise return the string false. 
*/
  
    var a = 'a',
        b = 'b',
        status,
        strA = str.toLowerCase().split('');
  
for (i = 0, x = strA.length; i<x; i++) {

      if (strA[i] == a && strA[i+4] == b || strA[i] == b && strA[i+4] == a) {
        str = true;
        return str;
      } else {

        str = false;
      }

  str = false;
}
  
 return str; 
         
}
console.log(ABCheck("abccccazzzb"));
