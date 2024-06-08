// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.

// Good luck!



// My Attempt but it would time out and or mix up sum in larger number/array

function common(a,b,c){
    return a.filter( el => b.includes((el)) && c.includes(el)).reduce((acc,curr) => acc += curr,0)
  }


// Code Wars Solution

const common = (a,b,c) => {
    [a,b,c] = [a,b,c].map(el => el.reduce((sum, num) => (sum[num] = (sum[num] || 0) + 1, sum), {}));
    return Object.keys(a).reduce((sum, key) => sum + Math.min(a[key]||0, b[key]||0, c[key]||0) * key, 0); 
 }

 // Or

 function common(a,b,c){
    //Input is three arrays of integers
    
    //Variable to hold the sum
    let sum = 0;
    
    //Really only need to iterate over the first array
    for (let i = 0; i < a.length; i++) {
      //If the index of that element > -1 in both the other two arrays, add to sum
      if (b.indexOf(a[i]) > -1 && c.indexOf(a[i]) > -1) {
        sum += a[i];
        //slice out that integer from those arrays
        b.splice(b.indexOf(a[i]),1);
        c.splice(c.indexOf(a[i]),1);
      } 
    }

    //return sum
    return sum;
  }