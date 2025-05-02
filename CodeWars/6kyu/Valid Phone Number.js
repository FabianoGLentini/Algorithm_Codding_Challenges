// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

// My First Pass

function validPhoneNumber(phoneNumber){
    return phoneNumber.split("").reduce((acc,c,i)=> {
      
      if(i===0 && c !== "(") acc = false
      if(i===4 && c !== ")") acc = false
      if(i >= 1 && i <=3 && typeof +c !== "number") acc = false
      if(i===5 && c !== " ")  acc = false
      if(i >= 6 && i <= 8 && typeof +c !== "number") acc = false
      if(i===9 && c !== "-")  acc = false
      if(i >= 10 && i <= 13 && typeof +c !== "number") acc = false
      if(phoneNumber.length > 14) acc = false
      
      return acc
    },true)
  }

// Code Wars Alternative -- Note: Many of the code wars solution used regex or played with the fact that their wasent going to be random letters that replaced the numbers. 

function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
   var str=phoneNumber.split("");
    if(str.length!=14||str[0]!=='('||str[4]!==')'||str[5]!==' '||str[9]!=='-')
        return false;
    else
            return true;
  } 