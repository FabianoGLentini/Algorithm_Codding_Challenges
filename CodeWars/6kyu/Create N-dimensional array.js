// Little boy Vasya was coding and was playing with arrays. He thought: "Is there any way to generate N-dimensional array"?
// Let us help little boy Vasya. Target of this Kata is to create a function, which will generate N-dimensional array. For simplicity all arrays will have the same length.

// Input:
// N: number -> depth of outter array, N > 0
// size: number -> length of all arrays, size > 0
// All inputs will be valid.
// On the last (deepest) level we should put a string wich will describe the depth of our array. Example: 'level 2'

// Example:
// for createNDimensionalArray(2,3) output should be:
// [
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
// ]

// for createNDimensionalArray(3,2) output should be:

// [
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ], 
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
// ]
// Good luck!

//Break down

//from the start we add a 3rd parameeter that equals to n so we can carry our result from eahc recursion. Note that k starts off by = 2 but when we do are recursion we state that k is k thus it will no longer change with n, succesfully saving n original value!
const createNDimensionalArray = (n, size, k = n) => {
    //Base Case is n === 1 to indicte that we have made all the required lvls as then we dont need a recursion
    if(n === 1){

        //we create the final lvl of the array, if n start as 1 it will be the only lvl, and we repeat level[k] (k which holds the original value of n) and repeat it the size amount of time. It reapeats [`level ${k}`]
        return new Array(size).fill(`level ${k}`) 
    }

    //if n !== 1 we need to repeat to get the appropriate amount of lvl, we return k as is to save n original value. We will go deeper and deepr into the recursion until we get to the base case, then we will unravel back creating all the layers 
    return new Array(size).fill(createNDimensionalArray(n - 1, size, k))
  }

//Code

const createNDimensionalArray = (n, size, k = n) => {
    if(n === 1){
        return new Array(size).fill(`level ${k}`) 
    }
    return new Array(size).fill(createNDimensionalArray(n - 1, size, k))
  }


//or

  const createNDimensionalArray = (n, size, k) => {
    if(!k){
        k = n
    }
    if(n === 1){
        return new Array(size).fill(`level ${k}`) 
    }
    return new Array(size).fill(createNDimensionalArray(n - 1, size, k))
  }

//or

const createNDimensionalArray = (n, size) => {
    let arr;
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        arr = Array(size).fill(`level ${n}`);
      } else {
        arr = Array(size).fill(arr);
      }
    }
    return arr;
  }


// Chat Recomendation

const createNDimensionalArray = (n, size) => {
  if (n === 1) {
    return new Array(size).fill(`level ${n}`);
  }

  // Create the next level array once, then use its reference for filling
  const subArray = createNDimensionalArray(n - 1, size);
  return new Array(size).fill(subArray);
};


