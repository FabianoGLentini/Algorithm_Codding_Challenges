// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My First Pass

function longest(s1, s2) {
    const bigArr = s1+s2,
          obj = new Set(bigArr.split("")),
          arr = Array.from(obj).sort()
    
    return arr.join("")
  }

  // My Refractor

  function longest(s1, s2) {
    return Array.from(new Set((s1+s2).split(""))).sort().join("")
  }


// Code Wars Alternative 

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')