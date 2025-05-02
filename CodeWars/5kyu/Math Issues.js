// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

// My First Pass

Math.round = function(number) {
    return Number(number.toFixed(0))
  };
  
  Math.ceil = function(number) {
    return !(number%1) ? number : number - number%1 + 1
  };
  
  Math.floor = function(number) {
    return number - number%1 
  };

  // Code Wars Alternatives

  //unlike bitwise operators, this works for x >= 2147483648
Math.floor = function floor(x){
    return x - x % 1; 
 }
 //function calls are expensive, so...
 Math.round = function round(x){
    return (x + 0.5) - (x + 0.5) % 1;
 }
 Math.ceil = function ceil(x){
    return x - x % 1 + !!(x % 1);
 }

 //Or

 Math.floor = number => parseInt(number)
Math.round = number => Math.floor(number + 0.5)
Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )