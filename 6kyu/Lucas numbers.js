// Lucas numbers are numbers in a sequence defined like this:

// L(0) = 2
// L(1) = 1
// L(n) = L(n-1) + L(n-2)
// Your mission is to complete the function that returns the nth term of this sequence.

// Note: It should work for negative numbers as well; how you do this is you flip the equation around, so for negative numbers: L(n) = L(n+2) - L(n+1)

// Examples
// L(-10) = 123
// L(-5)  = -11
// L(-1)  =  -1
// L(0)   =   2
// L(1)   =   1
// L(5)   =  11
// L(10)  = 123


// My Solution

function lucasnum(n){
    return Math.round(((1 + Math.sqrt(5))/2)**n + ((1 - Math.sqrt(5))/2)**n)
  }



// Code Wars Alternative

const lucasnum = n => {
    const phi = (1 + Math.sqrt(5)) / 2
    const psi = (1 - Math.sqrt(5)) / 2

    return Math.round(Math.pow(phi, n) + Math.pow(psi, n))
}

// Or 

const lucasnum = n => {
	let [num, nextNum] = [2, 1];
  
  for (let i = 1; i <= Math.abs(n); i++)
    [num, nextNum] = [nextNum, num + nextNum];
  
  return num * (-1) ** (n % 2 === -1);
}
