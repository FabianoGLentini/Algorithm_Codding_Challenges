// Task
// Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

// Examples:
// 11 -> 9, because 11 * 9 == 99.

// 12 -> -1, because 12 is even, so no multiple of it can contain only nines.

// 13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines.

// NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.


// My Solution 

function allNines(x) {
    let nine = "9"
  
    for(i=0;i<x;i++) {
      if(BigInt(nine) % x === 0n) return (BigInt(nine) / x)
      
      nine += "9"
    }
    
    return -1n
  }


// Code Wars Alternatives

const allNines = x => {
    if (!(x % 5n) || !(x % 2n)) return -1n;
    
    for (let nines = 9n; ; nines = nines * 10n + 9n)
      if (!(nines % x)) return nines / x;
  }