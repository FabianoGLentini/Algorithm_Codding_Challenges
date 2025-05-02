// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


// My JS Attempt (Note: I was not able to make it go fast enough nor consider the index spacing)

function sumPairs(ints, s) {
    if(s > 0){
      for( num of ints) {
        if(ints[ints.lastIndexOf(s-num)] === 0 || ints[ints.lastIndexOf(s-num)]) return [num, s - num]
      }
      
    }else{
      for(num of ints) {
        if(ints[ints.lastIndexOf(s+num)] === 0 || ints[ints.lastIndexOf(s+num)]) return [num, s + num ]
        
      }
    }
  }


  // Code Wars Solution

  function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
      if (seen.has(s - i)) return [s - i, i];
      seen.add(i);
    }
  }

  // My Breakdown Of Code Wars Solution

  function sum_pairs(ints, s) {
    let seen = new Set(); // uses obj set to keep load small and only have 1 of each input when processing
    for (let i of ints) {// using for of loop as it is the fastest loop to go through arr, not in this case i isent index but instead is the actually element of int
      if (seen.has(s - i)) return [s - i, i]; // check if the obj seen has the needed value we are looking for 
      seen.add(i); // if seen doesent we add the element to our set to process later
    }
  }