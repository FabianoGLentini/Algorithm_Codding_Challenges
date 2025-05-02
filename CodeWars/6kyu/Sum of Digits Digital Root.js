// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//First Pass ** did no work as ~~ with 999999999 would ruin the number and would have to many calls. I overly complicated this one XD

function digitalRoot(n) {
    const arr = []
    let tmp
    
    while(n){
      tmp = n%10
      n = ~~(n/10)
      arr.unshift(tmp)
    }
    
   return arr.length === 1 ?  arr.reduce((acc,c) => acc += c, 0) : digitalRoot(arr.reduce((acc,c) => acc += c, 0))
  }

  //Code wars solution:

  function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

  //or
  function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  }