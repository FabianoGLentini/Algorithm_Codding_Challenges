// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//First Pass

function getCount(str) {
	let result = 0
    str.toLowerCase().split("").reduce((acc, c) => {
      if ( c === "a" || c === "e" || c === "i" || c === "o" || c === "u"){
        ++result
      }	 
    },0)
	return result
  }


  // code wars suggestion

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


   // or

   function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }