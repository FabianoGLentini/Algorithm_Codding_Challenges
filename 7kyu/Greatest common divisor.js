// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//Code Wars Solution

function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }

//Or

function mygcd(a, b) {
    if (b === 0) {
      return a;
    }
    return mygcd(b, a % b);
  };

//Or

function mygcd(x,y){
    let temp;

    //while(y) is truthy continue the loop so as soon as y finally equals 0 which will result in falsy, we end the loop
    while(y) {
    //temp will equal why no matter if it is bigger or smaller then x
       temp = y;
    //we then say y is equal to x%y if x is maller then y it will return x as y cant fit in x thus x remainds 
      y = x % y;
    // x will takeover the last value of temp which is y and then we loop again with the new value of y which is smaller then before
      x = temp;
    }
    return x;
  }

// My Second Pass

function mygcd(x,y){ 
    //tmp to hold our value
    let tmp
    
    // 1) Base Case: x or y === 0 ; we can use the while loop to stop when y == 0
    while(y){
      // we hold y in tmp to transfer to x as we go through our loop
      tmp = y
      
      // 2) Recursive Case: Euclean Algorithm x = q * y + (x % y)
      //we are changing y's value to slowly reduce all the way down to 0
      y = x % y
      
      //x will equal to the last largest value of y we had 
      x = tmp
      
    }
    
    //we return tmp as it will hold the common divisor of both x and y as it will be the number that left a remainder of 0 for y
    return tmp
  }