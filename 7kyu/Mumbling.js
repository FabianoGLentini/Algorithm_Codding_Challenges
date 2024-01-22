// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My First Pass

function accum(s) {
    const arr = s.split("")
    let str = ""  
    
    for(i=0;i<arr.length;i++){
      str += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + "-"
    }
    
    return str.slice(0,-1)
  }

  // My Refractor

  function accum(s) {
    return s.split("").map((el,i)=> el.toUpperCase() + el.toLowerCase().repeat(i) + "-").join("").slice(0,-1)
   }

// Code Wars Alternative -- Note : they replaced teh slice and + "-" with a join("-")

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}