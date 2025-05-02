/*
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// My Solution

/*
  Pseudo:
  
  Steps to do:
  
    - check if arr is even or odd num of elements 
      - if odd fold is at middle el thus middle el will stay same
      - if not all nums will change
    
    - Start a loop based on number of runs we need to repeat action
      - split arr into 2 arr 
      - reverse el of arr 2
      - add sum arr 1 and 2 el based on index position
*/

function foldArray(array, runs){
  const fold = arr => [arr.slice(0, arr.length/2), arr.slice(arr.length/2).reverse()]
  let arrFolded = array
  
  for(let i = 0; i< runs; i++){
    let tmp = []
    arrFolded = fold(arrFolded)

    for(let j = 0; j<arrFolded[1].length; j++){
      tmp.push(arrFolded[0][j] ? arrFolded[0][j] + arrFolded[1][j] : arrFolded[1][j])
    }
    arrFolded = tmp
  }

  return arrFolded
}

// Code Wars Alternatives

function foldArray(array, runs) {
  if (!runs) return array;

  var result = [];
  // new Array
  for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }
  
  return foldArray(result, runs - 1);
}

  // Or
  
  function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}