/*

Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/

// My Solution

function range (... arg){
  const arr = []

  for(i = (arg.length >= 2 ? arg[0] : 1); i <= (arg.length >= 2 ? arg[arg.length - 1] : arg[0]); i += (arg.length === 3 ? arg[1] : 1)) {
    arr.push(i)
  }
  
  return arr
}


// Code Wars Alternatives

function range(min, step, max) {
  if (arguments.length === 1) return range(1, 1, min)
  if (arguments.length === 2) return range(min, 1, step)
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }
  return result
}

//  Or

const range = (start, step, end) => {
  if(!step){
    end = start
    start = 1
    step = 1
  }
  
  if(!end){
    end = step
    step = 1
  }
  
  const arr = []
  
  for(let i = start; i <= end; i+= step){
    arr.push(i)
  }
  
  return arr
}

