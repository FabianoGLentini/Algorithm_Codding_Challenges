// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//My First Pass

function sumDigits(number) {
    return String(number).split("").map( el => !Number(el) ? 0 : Number(el)).reduce((acc,c) => acc += c,0)
  }

  
// Code Wars Alternative 

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }