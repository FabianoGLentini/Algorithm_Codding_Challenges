// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

// My Attempt to Finding the solution

function perimeter(n) {
    if(n === 0) return 4
    const sr5 = Math.sqrt(5),
          fib1 = 1/sr5*((1+sr5)/2)**n,
          fib2 =  (-1/sr5)*((1-sr5)/2)**n
    
    
    return 4*sr5*(fib1+fib2)
  }


// Code Wars Solution

function fib(n) {               
    let a = 1, b = 1, tmp;
    while (n-- > 0) {
      tmp = a;
      a = b;
      b += tmp;
    }

    return a;
  }
  
  function perimeter(n) {
      return 4 * (fib(n + 2) -1)
  }

// My Breakdown of the Solution

function fib(n) {               // they created a new function just for the fib equation         
    let a = 1, b = 1, tmp;      // creates variables to contain the tmp which will hold the a prior to equalling b. tmp represents the prior sequence value of fib, a also represents the prior sequence value of fib but updates for the next sequence number. b represent the currrent sequence value
    while (n-- > 0) { // every loop we reduce n by 1 till it equals 0. n represents the number of squares
      tmp = a; //prior prior sequence value stored in tmp
      a = b; //store the prior sequence end value before we adjust it to current sequence value
      b += tmp; // add the 2 sequence value together for new sequence value
    }

    return a; // they return the most current sequence total value
  }
  
  function perimeter(n) {
      return 4 * (fib(n + 2) -1) // we multiply the result of our fib by 4 to represent the 4 sides of each square. we use our fib function to find the side legnth of all of our squares , note we add 2 to skip the first 2 sequences of fib which are 1 and 1 and then we minus our fib result by 1 to bring us back down to the appropriate sequence. The fib sequence returns us the sum of a single side of each square thus we then multiply it by 4 to get the paremeter of all squares together
  }

  //My Adjustment of the layout of the code
  
  function perimeter(n) {
      return 4 * (fib(n + 2) -1)


      function fib(n) {               
        let a = 1, b = 1, tmp;
        while (n-- > 0) {
          tmp = a;
          a = b;
          b += tmp;
        }
        return a;
      }
  }