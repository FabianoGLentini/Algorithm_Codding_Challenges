// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

//First Pass

function maxProduct(arr) {
    let maxArr = arr.sort((a,b) => a < b ? -1: 1).slice(-2)
    return maxArr[0] * maxArr[1] 
}
  
//Need to make faster code Here is code from code ars

function maxProduct(arr) {    
    let max = arr[0], preMax = arr[0];
     

    for(i=1;i<arr.length;i++)
    {
      if(arr[i] > max)
      {
        preMax = max;
        max = arr[i];
      }
      else
      {
        if(arr[i] > preMax)
        {
          preMax = arr[i];
        }
      }
    }
  
    return max * preMax;
  }