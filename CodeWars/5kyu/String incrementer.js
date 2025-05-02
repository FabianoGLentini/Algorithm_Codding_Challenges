// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//Firt attempt and where I got, till I hit fo99obar99 as string
function incrementString (strng) {
    const num = "0123456789"
    const strNumArr = strng.split("").filter(a=> num.includes(a)) 
    const strNum = Number(strNumArr.join(""))+1
    const incrementStrLength = strNum.toString().split('').length
  
    if(strNumArr.length > incrementStrLength){
      return strng.slice(0,-(incrementStrLength)) + strNum
    }else{
      return strng.replace(/[0-9]/g, '') + strNum
    }
  }

  //Code wars solution

  function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }
  