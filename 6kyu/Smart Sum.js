// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21

//code wars solution

const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);

//or

const smartSum = (...args) => args.reduce((s, a) => s + (Number.isInteger(a) ? a : smartSum(...a)), 0);

//or

function smartSum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        sum += arguments[i];
      } else {
        for (let j = 0; j < arguments[i].length; j++) {
          sum += smartSum(arguments[i][j]);
        }
      }
    }
    return sum;
  }