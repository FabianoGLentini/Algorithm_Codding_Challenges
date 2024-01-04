// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My First Pass

function cleanString(s) {
    const str = []
    
    for(i=0; i< s.length; i++){
      if(s[i] === "#") {
        str.splice(-1)
      }else{
        str.push(s[i])
      }
    }
    
    return str.join("")
  }

  // My Refractor

  function cleanString(s) {
   const str = []
    
   s.split("").forEach(el => el === "#" ? str.splice(-1) : str.push(el))
    
    return str.join("")
  }


// Code Wars Alternative

function clean_string(s) {
    const result = []
      for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }

  // Or with my own adjustments

  function cleanString(s) {
    return s.split('').reduce((acc, c) => c == '#' ? acc.slice(0, -1) : acc + c, '');
 }