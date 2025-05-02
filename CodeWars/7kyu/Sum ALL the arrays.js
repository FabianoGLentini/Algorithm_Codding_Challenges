// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

//Code breakdown

function arraySum(arr) {
    return arr.reduce((acc, x) => {
        //we check if x is an array before we combine it with the acc if yes we do acc + the recursion of the function, it will keep doing this untill it finds the deppest value, and slowly eliminate the inner arrays one by one
      if (Array.isArray(x))
        acc += arraySum(x);
        
        // if x is not equal to a Nan value we just do the normal reduction of acc += x
      else if (!isNaN(x))
        acc += x;
      //at the end we return acc once all the if else statements end up false
      return acc;
    }, 0);
  }

//Only code

function arraySum(arr) {
    return arr.reduce((acc, x) => {
      if (Array.isArray(x))
        acc += arraySum(x);
        
      else if (!isNaN(x))
        acc += x;
      return acc;
    }, 0);
  }
