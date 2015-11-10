/*Problem:

  convert a number to its representation of hours and minutes with the format 0:0
  8 = 0:8
  126 = 2:6

*/

function TimeConvert(num) {  //This is what I submitted - did the job but inelegant
  
  var hrs,
      min;
  
  if (num >= 60) {
    
    	hrs = num/60 > 1 ? Math.floor(num/60) : 1;
        min = num-(60*hrs);
    	num = hrs + ':' + min;
    
  } else {
   
    num = '0:' + num;
  }
  
  return num; 
         
}

console.log(TimeConvert(145)) //2:25


//refactored after digging into % and realizing I was making things harder than they needed to be.
function TimeConvert2(num) { 
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  // code goes here  
  return hours + ':' + minutes; 
         
}
   

console.log(TimeConvert2(145)); //2:25