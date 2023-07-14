// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//First Pass

function stray(numbers) {
    const obj = numbers.reduce((obj,item)=>{
      obj[item] = obj[item] +1 || 1
      return obj
    },{}) 
    
    return +((Object.entries(obj).find(el=> el[1] === 1))[0])
  }

//Coode Wars Refractor

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));