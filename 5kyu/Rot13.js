// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//My First Attempt

function rot13(message){
    return message.split("").map(el => {    
  
      if(el === " ") return el
      
      if(el.charCodeAt() < 65) return el
      
      return el.toUpperCase() === el ? uCase(el.charCodeAt()) : lCase(el.charCodeAt())
      
      function lCase(l){ return l + 13 > 122 ? String.fromCharCode( ((l + 13)%122) + 96 ) : String.fromCharCode(l + 13)}
      function uCase(l){ return  l + 13 > 90 ? String.fromCharCode( ((l + 13)%90) + 64 ) : String.fromCharCode(l + 13)}
    }).join("")
  }

  // My Second JS Attempt Solution With Psuedo Code

  /*
  Parameters:
  
    - input a string message that can include cahracters besides letters, mix of upper and lower cases
    
    Result:
      
      - The output should be the string with all alphabetically characters changed to the letter 13 places after it
      - Keep values upper or lower case when shifting
      - ignore non alphabetical characters
      
    Example: 
    
      - rot13(A bIrd!) => should return "N oVeq!"
    
    Psuedo:
    
      - Create variable that will contain a string of the alphabet lower case called lowerCaseAlphabet
      - Create variable that will contain a string of the alphabet upper case called upperCaseAlphabet
      
      - Create a variable called cypheredResult that will contain the string form of our cypher as we loop
      
      - Create a function that will take ASCII value and keep it in its alphabetical loop when adding 13 
    
      - Loop through each character of the given string from message
        - Check if the character is a letter
          - if yes check if it is a capital letter or not and then turn it into the appropriate ASCII value add 13 and convert it back into letter form
              *Note: you must take into consideration that adding 13 may go beyond the alphabetical ASCII, make sure to use modulus corectly to simulate the looping of the alphabet*
        - Else return the character as is
    
     - Return cypheredResult 
*/

function rot13(message){
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz", upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let cypheredResult = ""
  
  // letterShift will shift the provided upper or lower case letter by 13 making sure to include z Z.
  const letterShift = (letter)=> {
    let charCode
    
    // Determine if letter is upper or lower case to execute appropriate ternary operator
    if(lowerCaseAlphabet.includes(letter)) {
      
      // First checks if the reminder === 0 or not to determine how to handle the value so we avoid excluding z from the rot13
      // We then proceed rotating the letter by 13 in the alphabet
      charCode = ((letter.charCodeAt() + 13) - 96) % 26 ?  ((letter.charCodeAt() + 13) - 96) % 26 + 96 : (letter.charCodeAt() + 13)
      
    } else {
       
      // First checks if the reminder === 0 or not to determine how to handle the value so we avoid excluding Z from the rot13
      // We then proceed rotating the letter by 13 in the alphabet
       charCode = ((letter.charCodeAt() + 13) - 64) % 26 ?  ((letter.charCodeAt() + 13) - 64) % 26 + 64 :  (letter.charCodeAt() + 13)
    }
    
    return String.fromCharCode(charCode)
  }
  
  // Loop through each characters determine if it is a letter or not and passes letters through letterShift function to rotate 13 else return character as is
  for(let i = 0; i < message.length; i++) {
    if(lowerCaseAlphabet.includes(message[i]) || upperCaseAlphabet.includes(message[i])){
      cypheredResult += letterShift(message[i])
    } else {
      cypheredResult += message[i]
    }
  }
  
  return cypheredResult
}



// Code Wars Solution

  function rot13(message){
    return message.split('').map(l => {
      let charCode = l.charCodeAt(0);
      if(charCode >= 97 && charCode <= 122){
        charCode = (charCode - 97 + 13) % 26 + 97;
      }
      else if(charCode >= 65 && charCode <= 90){
        charCode = (charCode - 65 + 13) % 26 + 65;
      }
      return String.fromCharCode(charCode);
    }).join('');
  }

// Or

var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}


// Chat Recomendation For Code

function rot13(message) {
  let cypheredResult = "";

  const letterShift = (letter) => {
    const charCode = letter.charCodeAt();
    
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    }
    
    // Non-alphabetical characters
    return letter;
  };

  for (let i = 0; i < message.length; i++) {
    cypheredResult += letterShift(message[i]);
  }

  return cypheredResult;
}


// Chat Recomendation For Psuedo Text

/*
- Input: A string message that can include characters other than letters and a mix of upper and lower cases.
- Output: The string with all alphabetical characters changed to the letter 13 places after it, keeping the case intact; non-alphabetical characters remain unchanged.

Pseudocode:

1. Initialize a variable `cypheredResult` to store the transformed message.

2. Define a function `letterShift(letter)` that:
   - Takes a letter and determines its ASCII code.
   - If the letter is uppercase (ASCII 65-90):
     - Shift it by 13 places within the alphabet and return the new character.
   - If the letter is lowercase (ASCII 97-122):
     - Shift it by 13 places within the alphabet and return the new character.
   - If the character is not a letter, return it unchanged.

3. Loop through each character in the input `message`:
   - Apply the `letterShift` function to the character and append the result to `cypheredResult`.

4. Return `cypheredResult`.

*/
