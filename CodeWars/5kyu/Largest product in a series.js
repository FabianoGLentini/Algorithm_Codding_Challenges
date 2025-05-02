// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

// The input string always has more than five digits.

// Adapted from Project Euler.

// My Solution 

function greatestProduct(input) {
    const product = chunk => String(chunk).split("").reduce((acc,c) => acc *= +c, 1)
    let ans = 0
  
    
    for(i=0;i<input;i++) {
      let ck = input.slice(i, i + 5)
      
      if(ck.length < 5) break
  
      ans = Math.max(ans, product(ck))
    }
    
    return ans
  }



// Code Wars Alternative

function greatestProduct(input) {
    return input.split('').reduce(function(max, d, i, a) {
      if (i > input.length - 5)
        return max;
      var prod = a.slice(i,i+5).reduce(function(prd, d) {return prd*parseInt(d,10)},1);
      return Math.max(max, prod);
    }, 0);
  }


  // Or

  const greatestProduct=s=>Math.max(...[...s.slice(0,-4)].map((x,y)=>[...s.slice(y,y+5)].reduce((a,b)=>+a*+b)))


  // Or

  function greatestProduct(input) {
    const nums = [...input].map(Number);
    
    const getProduct = (start, end) => {
      let res = 1;
      
      for (let i = start; i < end; i++) {
        res *= nums[i];
      }
      
      return res;
    }
      
    let curProduct = getProduct(0, 5),
        maxProduct = curProduct;
    
    for (let i = 5; i < nums.length; i++) {
      curProduct = nums[i - 5] > 0
        ? curProduct / nums[i - 5] * nums[i]
        : getProduct(i - 4, i + 1);
      
      if (curProduct > maxProduct) maxProduct = curProduct;
    }
    
    return maxProduct;
  }