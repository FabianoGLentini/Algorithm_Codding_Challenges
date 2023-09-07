// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//First Pass

function findUniq(arr) {
    const dupCk = new Set(arr)
    let value
    
    dupCk.forEach( el => {
      if(arr.indexOf(el) === arr.lastIndexOf(el)) return value = el
    })
    
    return value
  }

//My Refractor

function findUniq(arr) {
    return arr.find( el => arr.indexOf(el) === arr.lastIndexOf(el))
  }

