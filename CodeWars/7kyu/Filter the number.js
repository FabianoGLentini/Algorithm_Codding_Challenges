// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// My JS Solution 

var filterString = function(value) {
    return parseInt(value.split("").filter(el =>  el == +el).join(""))
  }

// Code Wars Alternatives

var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }

// Or 
  
var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }

// Chat Recomendation

const filterNumbersFromString = (value) => {
    return parseInt(value.replace(/\D/g, ''), 10);
  };
  