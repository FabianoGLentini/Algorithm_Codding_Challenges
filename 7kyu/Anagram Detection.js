// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My First Pass

var isAnagram = function(test, original) {
    const ck = test.toLowerCase().split("").reduce((obj,it) => {
      obj[it] = obj[it] + 1|| 1
      return obj
    },{})
    
    return original.toLowerCase().split("").every(it => -- ck[it] >= 0) && test.length === original.length
  };
  

// Code Wars Alternative Solution

var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };