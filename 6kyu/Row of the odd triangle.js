// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.

// The idea for this kata was taken from this kata: Sum of odd numbers


// My Solution 

function oddRow(n) {
    const el01 = n*(n-1) + 1,
          row = [el01]
    
    for(i=1;i<n;i++){
      row.push(row[i-1]+2)
    }
    
    return row
  }

// Code Wars Alternative

function oddRow(n) {

    let term = n * n - n - 1
    ,    res = [];
    
    for (let i = 0; i < n; i++)
      res.push(term += 2)
      
    return res;
  
  }

  // Or

  function oddRow(n) {
    return Array(n).fill(0).map((_,i)=>n*n-n+1+i*2);
  }