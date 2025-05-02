// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.

// Examples:

// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true

// My Pass

function solution(... arg){
    return arg.some( el => arg.indexOf(el) !== arg.lastIndexOf(el))
  }

// Code Wars Alternative

function solution() {
    for (var map = new Map(), i = arguments.length; i--;) {
      if (map.has(arguments[i])) return true
      map.set(arguments[i], 1)
    }
    return false
  }

// Code Wars Alternative Clever Solution 

function solution(){return new Set(arguments).size!=arguments.length;}