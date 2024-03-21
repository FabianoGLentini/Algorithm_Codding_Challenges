// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//My Attempt

function rot13(message){
    return message.split("").map(el => {    
  
      if(el === " ") return el
      
      if(el.charCodeAt() < 65) return el
      
      return el.toUpperCase() === el ? uCase(el.charCodeAt()) : lCase(el.charCodeAt())
      
      function lCase(l){ return l + 13 > 122 ? String.fromCharCode( ((l + 13)%122) + 96 ) : String.fromCharCode(l + 13)}
      function uCase(l){ return  l + 13 > 90 ? String.fromCharCode( ((l + 13)%90) + 64 ) : String.fromCharCode(l + 13)}
    }).join("")
  }

  //Code Wars Solution

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