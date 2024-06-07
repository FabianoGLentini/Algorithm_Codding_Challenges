// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// Some good reading: MDN Docs about arrays


// My Solution 

function withoutLast(arr) {
    return arr.slice(0,-1)
  }



// Code Wars Alternative

const withoutLast = arr => arr.slice(0, -1)

// Or

function withoutLast(arr) {
    arr = [...arr]
    arr.pop();
    return arr;
  }