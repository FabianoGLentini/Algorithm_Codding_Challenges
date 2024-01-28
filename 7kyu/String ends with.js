// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My First Pass

function solution(str, ending){
    if(!ending) return true
    
    return str.slice(-(ending.length)) === ending 
  }

// Code Wars Alternative

function solution(str, ending){
    return str.endsWith(ending);
  }