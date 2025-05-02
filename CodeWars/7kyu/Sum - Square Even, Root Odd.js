// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

//First Pass

const sumSquareEvenRootOdd = ns => {
    const sum = ns.map(element=>{
       if(element%2 ===0){
         return Math.pow(element,2)
       }else{
         return Math.sqrt(element)
       }
     }).reduce((acc,c)=>{
       return acc+=c
     },0)
     return Number(sum.toFixed(2))
     };
   
  
    //Code wars refractor recomendation
  
    const sumSquareEvenRootOdd = ns => {
      let odd = ns.filter(e => e % 2).reduce((a,b) => a + Math.sqrt(b),0);
      let even = ns.filter(e => !(e % 2)).reduce((a,b) => a + Math.pow(b,2),0);
      return +(odd + even).toFixed(2)
    };