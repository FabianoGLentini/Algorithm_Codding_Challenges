// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].



// My First Pass

// function sumIntervals(intervals) {
//     // we need to sort the intervals from smaller to largest numbers basde on the index position 0
//     intervals = intervals.sort()
    
//     // we then compare the resorted intervals last index value to the next first index value. 
//       //if last index value is greater then the first of the next interval value, create new interval.
//       //New interval will contain the first value of the prior interval and the last of the next interval
//     //else if the prior condition is not met put the original interval as is
    
//     //use new set of intervals to find the sum by doing (el[1] - el[0]) + <next interval>
//     return intervals
//   }

function sumIntervals(intervals) {
  // we need to sort the intervals from smaller to largest numbers basde on the index position 0
  intervals = intervals.sort()
  const int = []
  let j = 0
  
  for(i=0;i<intervals.length;i++) {
    j++
    
    if (j===intervals.length) {
      int.push(intervals[i])
      
    } else if (intervals[i][1] >= intervals[j][0]) {
      int.push([intervals[i][0],intervals[j][1]])
    }
  }
  
  return int
}

  //My Second Pass

  // My First Pass

function sumIntervals(intervals) {
  intervals = intervals.sort()
  const int = []
  let j = 0,
      ans
  
  for(i=0;i<intervals.length;i++) {
    j++
    
    if (j===intervals.length) {
      int.push(intervals[i])
      
    } else if (intervals[i][1] >= intervals[j][0]) {
      int.push([intervals[i][0],intervals[j][1]])
    } 
  }

  

  ans = int.reduce((acc,c,i,arr) => {
      acc += c[1]-c[0]
      return acc
  },0)

  return ans
}


//Code Wars Answer

const sumIntervals = (intervals) => {
  intervals.sort((p, n) => p[1] - n[1]);

  for (let i = 0; i < intervals.length-1; i++) {
      if (intervals[i][1] > intervals[i+1][0]) {
          intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0])
          intervals[i][1] = intervals[i+1][1];
          intervals.splice(i+1,1);
          i = -1;
      }
  }
  return intervals.reduce((a, v) => a + (v[1]-v[0]),0);
}

    //My Breakdown of the answer; Note: I was part way there I neede to re-evaluate the loop that created teh new interval arr

    const sumIntervals = (intervals) => {
      intervals.sort((p, n) => p[1] - n[1]); // sort intervals from smallest end value of eahc array to biggest
  
      for (let i = 0; i < intervals.length-1; i++) {  //start loop to recreate the array preventing duplicates of overlaps
          if (intervals[i][1] > intervals[i+1][0]) {  //if the current interval[1] value is > then the next interval[0] value we know that their is an overlap thus we then address it
              intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0]) //we take teh smallest interval between the 2 starting value of eahc intervals to push as the new starting interval
              intervals[i][1] = intervals[i+1][1]; //we replace the largest interval of the two as our new large value, we do not need to use Math.max as weve sorted the array based on teh large value of each intervals
              intervals.splice(i+1,1); // We use splice to remove the old interval that was overlapped.
              i = -1; //We bring the i back down by 1 so we can re-evaluate the array to allow us to check the new interval with the next interval, this allows us to catch new overlaps.
          }
      }
      return intervals.reduce((a, v) => a + (v[1]-v[0]),0); // we now reduce our interval to find the sum
  }
