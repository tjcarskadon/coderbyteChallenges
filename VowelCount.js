function VowelCount(str) { 

  // code goes here 
  var cnt =0,
      arr= str.split(''),
      x = arr.length;
  
  for (var i=0; i<x; i++) {
  	if(arr[i].match(/[aeiouAEIOU]/gi)) {
    	cnt++;
    }  
  }
  return cnt; 
         
}