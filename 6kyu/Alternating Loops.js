// Write

// function combine()
// that combines arrays by alternatingly taking elements passed to it.

// E.g

// combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
// combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
// Arrays can have different lengths.


// My Solution

function combine(... arg) {
    const ans = []
    
    while(!arg.every(arr => arr.length === 0)) {
      arg.forEach(arr => ans.push(arr.shift()))
    }
    
    return ans.filter(el => el !== undefined)
  }


// Code Wars Solution

function combine(...arrs) {
    var max = arrs.reduce((n, arr) => Math.max(n, arr.length), 0)
    var res = []
    for (var i = 0; i < max; i++) {
      for (var arr of arrs) {
        if (i in arr) res.push(arr[i])
      }
    }
    return res
  }

  // Or

  const combine = (...arrs) => 
    arrs.reduce((acc, arr, i) => {
        return arr.forEach((item, j) => 
            acc[j * arrs.length + i] = item
        ), acc;
    }, []).filter(Boolean);