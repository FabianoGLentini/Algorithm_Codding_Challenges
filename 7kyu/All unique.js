// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// My First Pass

function hasUniqueChars(str){
    let arr = str.split("").map(el => el.charCodeAt())
    
    for(i=0;i<arr.length;i++){
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return false
    }
    
    return true
  }


// Code Wars Alternative

let hasUniqueChars = (str) => new Set(str).size === str.length;

  // or

  function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
  }