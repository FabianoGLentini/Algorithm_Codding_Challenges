// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!


// My Solution With Psuedo Code

/* Psuedo Code

  Options:
  
    - Find the sequence num and then find where the arr breaks out of the sequence and return the missing number of the sequence
    
    */

    var findMissing = function (list) {  
        // find sequence patern, knowing that the first and last element are the limits to the sequence and we arent missing it beyond or below the set of elements.
        const seq = [list[1] - list[0], list[list.length - 1] - list[list.length - 2]].sort((a,b) => Math.abs(a) - Math.abs(b))[0] // Note: must find the smallest gap and not smallest number, in otherwords we are judging number based on direction pos or neg
        console.log(list,seq)
        
        //filter through the sequence to find the missing num 
        const ans = list.find((el,i,arr) => el + seq !== arr[i+1])
        
        return ans + seq
        
      }


      // My Refractored Solution 

      var findMissing = function (list) {  
        const seqNum = [list[1] - list[0], list[list.length - 1] - list[list.length - 2]].sort((a,b) => Math.abs(a) - Math.abs(b))[0], 
              gapSt = list.find((el,i,arr) => el + seqNum !== arr[i+1])
        
        return gapSt + seqNum
      }


// Code Wars Alternatives

var findMissing = function (list) {
    var step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
  }


  // Or 

  var findMissing = function (l) {  
    return ((l[0]+l[l.length-1])*(l.length+1))/2-(l.reduce((a,b)=>a+b))
  }