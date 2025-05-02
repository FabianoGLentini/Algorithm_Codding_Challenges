// A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

// Here are examples of latin squares of size 4 and 7:

// [[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
//  [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
//  [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
//  [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
//                      [5, 6, 4, 3, 7, 2, 1], 
//                      [1, 2, 7, 6, 3, 5, 4], 
//                      [3, 4, 2, 1, 5, 7, 6]]
// Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.

// Task: Write a function that returns a latin square for any positive integer n.

// You might also enjoy Euler Squares.

// And please take a look at Latin Square Validator. (Since it's in beta, you won't get the expected number of points for solving it. But you can help get it approved by giving it a good rating, and then you will get the points once it is approved.)

// Breakdown of required code

function makeLatinSquare(n) {
  
    /* Need to create an array, from the n variable wich equals to a number, that contains n*arrays with n*index slots so n=4 
    the containing array should have 4 arrays inside [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]*/
  
    const arrCollect = new Array(n).fill(0).map(_=> new Array(n).fill(0))
  
  
  
    /*Need to fill up each existing array within the array with number starting from 1 going up to n and each array should shift this number
    by one index to make each array set unique example n = 3 n[0] =[1,2,3] n[1]=[2,3,1] n[2]= [3,1,2] the final result should be [[1,2,3], [2,3,1], [3,1,2]]*/
  
    for(i=0; i<arrCollect.length; i++){
      for(j=0; j<arrCollect.length; j++){
        arrCollect[i][j] = ((i + j) % n) +1
      }
    }
    return arrCollect
  }
