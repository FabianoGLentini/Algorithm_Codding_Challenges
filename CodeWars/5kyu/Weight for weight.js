// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.


// My Solution With Psuedo

/* Pseudo 

  Goal: 
    - Reorder string num based on num sum of its digits
    - If the digit sum of two different numbers are the same then take their str number value as the way to order it
    - Keep spacing?
    
  
  Options:
    - Split string into an array to then sort by reducing each of its new element into the sum of the digits when comparing elements. Can youse a helper function to do the reduction process
    

*/


function orderWeight(str) {
    const sumDig = num => num.split("").reduce((acc,c) => acc += +c, 0),
          lexicograph = (a,b) => { // Note after seeing the code wars answers I realise I could have used localCompare instead of this new function I created.
            
            const l = Math.max(a.length,b.length)
            let tmpA = "",
                tmpB = ""
            
            for(i=0;i<l;i++) {
              tmpA += a[i] ? a[i] : ""
              tmpB += b[i] ?b[i] : ""
              
              if(parseInt(tmpA) - parseInt(tmpB)) {
                return Number(tmpA) - Number(tmpB)
              }
            }
          }
    
    return str.split(" ").sort((a,b) => sumDig(a) - sumDig(b) === 0 ?  lexicograph(a,b) : sumDig(a) - sumDig(b)).join(" ")
    
  }

// Code Wars Alternatives

function orderWeight(strng) {
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
     function comp(a,b){
       let sumA = sum(a);
       let sumB = sum(b);
       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
      };
    return strng.split(' ').sort(comp).join(' ');
   }