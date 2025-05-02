
// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^300, which has over 10^92 decimal digits, is 6. Also, consider 0^0 to be 1.

// You can assume that the input will always be valid.

// Examples:
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n, 10000000000n) // returns 0n


// My First Attempt (Unsuccessfull)

var lastDigit = function(str1, str2){
    const numPowToString =  Math.pow(str1,str2).toString(),
            last = BigInt(numPowToString.split("").slice(-1)).toString() 
      
      return +last ? +last : 0
     }


 // My Second Attempt (Unsuccessfull)
 var lastDigit = function(str1, str2){
    const base = str1.slice(-1),
          cycle = Number(str2) % 4
    
    if(base == 0 && cycle == 0) return 0
    
    
    let last = cycle !== 0 ? BigInt(String(Math.pow(base,cycle)).slice(-1)).toString() :BigInt(String(Math.pow(base,4)).slice(-1)).toString()
    
    return + last
  
     }


// Code Wars solution With my own minor adjustments 

const lastDigit = (n, m) => {
    let base = n % 10n,
        rem = m % 4n,
        exp = (rem === 0n && m !== 0n) ? 4n : rem;

    return base ** exp % 10n;
  };


//My Breakdown with minor adjustments

const lastDigit = (n, m) => { // We use the modular arithmetic theorum to effectively find the solution
    let base = n % 10n, // we find the base of n by finding the reminder of n from 10, Note 10 is accompanied with an n to denote that a BigInt litteral will be use for this number, this also applies to the other numbers we attach n to later on such as 4n and 0n
        rem = m % 4n, // we get the reminder of the number we wish to use as teh exponent to find its cycle, note exponents of numbers have cycles of 4 hence why we are looking for the remainder of 4
        exp = (rem === 0n && m !== 0n) ? 4n : rem // we check if both our rem and m are equal to 0 or not so we can insure we use the correct number cycle as a 4 cycle ends up giving us 0
        
    return base ** exp % 10n; // we tehn calculate the base raised to the power of the exp and get the remainder of 10 which would isolate the last digit of the  number
  };
