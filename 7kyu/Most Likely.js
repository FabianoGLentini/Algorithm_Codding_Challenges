/*
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less 
*/

// My Solution

function mostLikely(prob1,prob2){
  let val1 = prob1.split(":").map(el => Number(el)), val2 = prob2.split(":").map(el => Number(el))

return val1[0] / val1[1] > val2[0] / val2[1]
}


// Code Wars Alternatives

function mostLikely(prob1,prob2){ // I really like this solution, much clearer and to the point
  let [a, b] = prob1.split(':');
  let [c, d] = prob2.split(':');
  
  return a/b > c/d;
}

// Or

const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));