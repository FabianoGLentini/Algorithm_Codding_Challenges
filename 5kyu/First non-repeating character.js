// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//My First Pass

function firstNonRepeatingLetter(str) {
    const strCk = str.toLowerCase()
    
    for(i=0; i<strCk.length; i++){
      if(strCk.lastIndexOf(strCk[i]) === i && strCk.indexOf(strCk[i]) === i){
        return str[i]
     }
    }

    return ""
  }

//Code Wars Alternative

function firstNonRepeatingLetter(s) {
    const str = s.toLowerCase();

    for(i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }