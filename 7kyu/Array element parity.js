// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// My First Pass

function solve(arr){
    const absArr = arr.sort((a,b) => Math.abs(a) - Math.abs(b)),
          chunks = []
    
    for(i=0;i<absArr.length;i+=2) {
      const chunk = absArr.slice(i, i + 2)
      
      chunks.push(chunk)
    }
    
    return chunks.find(([a,b]) => a + b !== 0).pop()
  };

  //Code Wars Alternative

  const solve= arr => arr.find(e => !arr.includes(-e));