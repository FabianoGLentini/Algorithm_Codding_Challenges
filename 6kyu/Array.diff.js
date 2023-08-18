// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


//First Pass

function arrayDiff(a, b) {
    //we want to go through a and remove any instence of b values
    
    //loop through a
      //compare each b value to a el in the loop
    return a.filter(el => !b.includes(el))
    
  }

//My Refracctor

function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
  }



