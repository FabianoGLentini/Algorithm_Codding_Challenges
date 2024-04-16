// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

// My First Pass

function minSum(input) {
    let ans = 0, mi, ma
    const arr = input
    
    while (arr.length) {
      mi = arr.splice(arr.indexOf(Math.min(...arr)),1)
      ma = arr.splice(arr.indexOf(Math.max(...arr)),1)
      
      ans += mi*ma
    }
    
    return ans
  }

// Code Wars Alternative

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

  // Or

  function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }