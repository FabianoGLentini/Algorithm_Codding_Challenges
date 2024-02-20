// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"


//My First Pass

function explode(s) {
    const arr = s.split("")
    
    return arr.reduce((acc,c) => acc + c.repeat(c),"")
  }

  //My Refractor

  const explode = s => s.split("").reduce((acc,c) => acc + c.repeat(c),"")
