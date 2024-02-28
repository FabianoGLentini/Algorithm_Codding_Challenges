// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// My First Pass

function pyramid(n) {
    const arr = []
    
    while(n){
      arr.unshift(new Array(n).fill(1))
      
      n--
    }
      
    return arr
  }

// Code Wars Alternative

function pyramid(n) {
    return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
  }