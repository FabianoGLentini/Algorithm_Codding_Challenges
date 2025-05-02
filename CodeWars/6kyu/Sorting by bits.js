// In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

// E.g Given the array [7, 6, 15, 8]

// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0110)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].

// In cases where two numbers have the same number of bits, compare their real values instead.

// E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

// Your task is to write a function that takes an array of integers and sort them as described above.

// Note: your solution has to sort the array in place.

// Example:

// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]


// My Pass

function sortByBit(arr) {
    const sumBit = bit =>  String(bit).split("").reduce((acc,c) => acc += +c, 0)
    
    return arr.sort((a,b) => sumBit(a.toString(2)) - sumBit(b.toString(2)) ?  sumBit(a.toString(2)) - sumBit(b.toString(2)) : a - b)
    
  }


// Code Wars Alternative Refractor

function sortByBit(arr) {
    arr.sort( (a,b) => a.toString(2).split`1`.length - b.toString(2).split`1`.length || a - b);
  }


// Code Wars Alternative

function sortByBit(arr) {

    function bits(num) {
        return Array.from((num).toString(2), (a)=>Number(a)).reduce((a,b) => a + b);
    };
  
    function cmp (a, b) {
       var result = bits(a) - bits(b);
       if (result != 0) {
           return result;
       } else {
           return a - b;
       };
    };
    arr.sort(cmp);
  }