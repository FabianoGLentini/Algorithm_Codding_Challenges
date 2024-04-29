// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

// My Pass

function tripledouble(num1, num2) {
    return String(num1).split("")
      .some((el, i, arr) => el === arr[i+1] && el === arr[i+2] 
                                       && String(num2).split("")
                                                      .some( ( el2, j, arr2) => el2 === el && el2 === arr2[j+1])) 
    ? 1 : 0
  }

// Code Wars Alternative

function tripledouble(num1, num2) {
    let nums = [...Array(10).keys()];
      
    return +nums.some(num => 
      num1.toString().includes(num.toString().repeat(3)) &&
      num2.toString().includes(num.toString().repeat(2))
    );
  }

  //Or If using regex this seasm to be the better approach

  function tripledouble(num1, num2){
    for(var i = 0; i < 10; i++){
      triple = new RegExp (i + "{3}")
      double = new RegExp (i + "{2}")
      if(triple.test(num1) && double.test(num2)){
         return 1
      }
    }
    return 0
  }