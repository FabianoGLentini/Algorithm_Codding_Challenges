// Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

// If a charater is repeated more than once, only show it once in the result array.

// Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

// Characters are case sensitive.

// For F# return a "char list"

// Examples:
// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first

// My First Pass

function remember(str) {
    const arr = str.split("").filter((el, _, array) => array.indexOf(el) !== array.lastIndexOf(el))
    
    return arr.reduce((acc,c,i) => {
      acc.includes(c) ? 0 : i > arr.indexOf(c)  ? acc.push(c) : 0
      return acc
    }, [])
  }

  // My Refractor

  function remember(str) {
    const arr = str.split("")
    
    return arr.reduce((acc,c,i) => {
      acc.includes(c) ? 0 : i > arr.indexOf(c)  ? acc.push(c) : 0
      return acc
    }, [])
  }


// Code Wars Alternative

function remember(str) {
    var result = [];
    var counts = {};
    
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      counts[c] = (counts.hasOwnProperty(c) ? counts[c] : 0) + 1;
      
      if (counts[c] === 2) {
        result.push(c);
      }
    }
    
    return result;
  }

  // Or

  function remember(str) {  
    return str.split('')
    .filter((item,i,allItems) => i !== allItems.indexOf(item))
    .filter((item,i,allItems) => i === allItems.indexOf(item));
}