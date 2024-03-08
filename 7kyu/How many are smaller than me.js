// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

//My First Pass

function smaller(nums) {
    return nums.map((num, i) => num = nums.slice(i+1).filter(el => el < num).length)
  }

//Code Wars Alternative

function smaller(nums) {
    let count;
    let base;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
      base = nums[i];
      count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < base) count++;
      }
      arr.push(count);
    }
    return arr;
  }