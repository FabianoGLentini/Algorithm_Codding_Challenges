// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// My First Pass

function alphanumeric(string){
    if(!string.length) return false
    
    
    return string.split("").every(el => (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) || ( el.charCodeAt() >= 97 && el.charCodeAt() <= 122) || ( el.charCodeAt() >= 48 && el.charCodeAt() <= 57))
  }


  // My Refractor

  function alphanumeric(string){
    if(!string.length) return false
    
    
    return string.split("").every(el => (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) || 
                                 ( el.charCodeAt() >= 97 && el.charCodeAt() <= 122) || 
                                    ( el.charCodeAt() >= 48 && el.charCodeAt() <= 57))
  }

// Code Wars Alternative

function alphanumeric(string){
  
    for (let str of string ) {
      if (str.toUpperCase() === str.toLowerCase() && parseInt(str) !== Number(str)) {
        return false;
      }
    }
    
    return string.length > 0;
  }

  // Or With Regix

  let alphanumeric = s => /^[a-z\d]+$/i.test(s);