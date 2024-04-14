// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial



// My First Pass

function factorial(n){
    let ans = 1
    
    while(n > 0) {
      ans *= n
      n -= 1
    }
    
    return ans
  }

  // Code wars alternative 

  const factorial = n => n ? factorial(n - 1) * n : 1;