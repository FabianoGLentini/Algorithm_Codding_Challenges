// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// My First Pass

function halvingSum(n) {
    let sum = 0
    
    while(n >= 1){
      sum += n
      n = Math.floor(n/2)
    }
    
    return sum
  }

//code Wars Refractor

const halvingSum = n => n > 1 ? n + halvingSum(n / 2 | 0) : n