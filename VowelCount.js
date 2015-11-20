function VowelCount(str) {

  // code goes here 
  var cnt = [],
      arr= str.split(''),
      x = arr.length;
  
  for (var i=0; i<x; i++) {
  	if(arr[i].match(/[aeiouAEIOU]/gi)) {
    	cnt[i] = arr[i].match(/[aeiouAEIOU]/gi);
    }  
  }
  return cnt; 
         
}

console.log(VowelCount("abcdefga"));