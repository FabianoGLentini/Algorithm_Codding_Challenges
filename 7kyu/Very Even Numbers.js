// Task
// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

// Examples
// number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

// number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even

// number = 5 => returns false

// number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be 0 or positive integers!

// My First Pass

function isVeryEvenNumber(n) {
    while(n > 9) {
      n = String(n).split("").reduce((acc,c) => acc += +c, 0)
    }
    
    return n % 2 === 0
  }

  //My Alternative Using Recursion Function

  function isVeryEvenNumber(n) {
    const red = val => String(val).split("").reduce((acc,c) => acc += +c, 0)

    return n > 9 ? isVeryEvenNumber(red(n)) : n % 2 === 0
  }



// Code Wars Clever Alternative

function isVeryEvenNumber(n) {
    return !n-- || n % 9 % 2 === 1;
  }