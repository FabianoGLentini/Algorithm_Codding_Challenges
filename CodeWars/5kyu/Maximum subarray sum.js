// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//Code Wars Solution + My Adjustments

function maxSequence(arr){
    let min = 0, ans = 0, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }


//Code Wars Solution Breackdown + My Adjustments

function maxSequence(arr){
    //we set up our variable for min and max values
    let min = 0, ans = 0, sum = 0;

    //we loop through the array trying to find 
    for (i = 0; i < arr.length; ++i) {
        // we add to the sum to see the current total
      sum += arr[i];
      //we take the largest between the sum and current min, min will grow as we loop, this indicates teh new start...?
      min = Math.min(sum, min);
      //ans which will hold the max current value, we search if the sum - min (which will tell us start v current end) is bigger then our current answer.
      ans = Math.max(ans, sum - min);

      //important to not if for any reason the arr is 0 or everything is billow zero since ans is equall to 0 by default we address any of the restriction indicated prio for negative and or empty arrays
    }

    
    return ans;
  }