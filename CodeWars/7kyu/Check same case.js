// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

//My First Pass

function sameCase(a, b){
    return a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase() ? -1 : 
            a.charCodeAt() >= 97 &&  b.charCodeAt() >= 97 || a.charCodeAt() < 97 &&  b.charCodeAt() < 97 ? 1 : 0
  }


//Code Wars Alternative

function sameCase(a, b){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
    const checkCase = x => {
      if(x === x.toLowerCase()) return 'lower'
      if(x === x.toUpperCase()) return 'upper'
    }
  
    return checkCase(a) === checkCase(b) ? 1 : 0
  }

