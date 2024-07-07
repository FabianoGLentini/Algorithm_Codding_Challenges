/*
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:

"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

// My Solution

function shiftedDiff(first,second){
  let n = 0,
      str = first
  
  while(second !== str && n <= first.length){
    n++
    
    str = str[str.length - 1] + str.slice(0,-1)
  }

  return n <= first.length ? n : -1
}

// Code Wars Alternatives

 // I really like this  one as it merley duplicates the second string together univoidably putting together the original word within it and then all you need to do is find the index of the word within that string.
const shiftedDiff = (first, second) =>
  first.length === second.length ? second.repeat(2).indexOf(first) : -1;