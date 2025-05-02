/*
Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
*/


// My Attempt, I was able to pass the test but on random with many rows and columsn it failed

/*
  Pseudo:
  
  Goal:
  - Take in a matrix and then swap it column and its rows turning a 2 b y 3 to a 3 by 2
  - Note row 1 of 2 becomes colum 2 of 2 
  
  
  Steps:
  - create a new arr that will contain the new matrix
    - Add needed rows based on columns of original matrix
  - loop through the rows of og matrix and push into eachh row of og matrix
  -
  
*/

function transpose(matrix) {

  const transposedMatrix = [],
        l = matrix[0].length
  
  // create rows for trans, i is columns of matrix
  for(let i = 0 ; i<l; i++){
    transposedMatrix[i] = []
    
    // create columns of trans, j is rows of matrix
    for(let j = 0 ; j<matrix.length; j++){
      let val = matrix[j].shift()
      
      val ? transposedMatrix[i].push(val) : null
      
    }
  }
  
  return transposedMatrix
}


// Code Wars Solutions

var transpose = m => m[0].map((_, i) => m.map(r => r[i]));// this one was clever

// Or

function transpose(matrix) {
  var transposed = [],
    rows = matrix.length,
    cols = matrix[0].length;
   
  for(i = 0; i < cols; i++) {
  transposed[i] = [];
    for(var j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  
  return transposed;
}


// Breakdown of Code Wars Solution

function transpose(matrix) {
  var transposed = [], // Create arr conttainer for our transposed matrix
    rows = matrix.length, // gives us the matrix length which will be our transposed columns
    cols = matrix[0].length; // containt the matrix col length to be our transposed rows
   
  for(i = 0; i < cols; i++) { // Start loop through the matrix cols
  transposed[i] = []; // we create our transposed rows for each cols
    for(var j = 0; j < rows; j++) { // loop through matrix rows which will be our transposed columns
      transposed[i][j] = matrix[j][i]; // we then add to the transposed [row][colums] the matrix element at its position of transposed col val index and transposed row val index
    }
  }
  
  return transposed; // return value
}