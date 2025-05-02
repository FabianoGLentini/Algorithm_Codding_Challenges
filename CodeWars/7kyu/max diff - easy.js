// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted


// My JS Solution 

//This function doesent take arr full of negatives numbers into consideration
function maxDiff(list) {
    if(!list.length) return 0
    return Math.max(... list) - Math.min(... list)
  };

// Code Wars Alternatives

function maxDiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0;
  };

// Or

// for 12 sec
const maxDiff = (arr) => arr.sort((a,b)=>a-b)[arr.length-1] - arr[0]  || 0