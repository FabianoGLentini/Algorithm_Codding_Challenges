// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


// My Solution 

function vowelBack(s){
    const consonent = ['b', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'x','z'],
          vowel = ['a','i','u'],
          exception = ["c", "o"],
          ck = ["c".charCodeAt(), "o".charCodeAt(), "e".charCodeAt(), "d".charCodeAt()],
          
          char = s.split("").map( el => {
            let st = el.charCodeAt()
            
            if(consonent.includes(el)){
              st = (st + 9) % 122 
              
              st = st < 97 && st > 0? st + 96 : st === 0 ? 122 : st
              
             return !ck.includes(st) ? String.fromCharCode(st) : el
            
            } else if(vowel.includes(el)) {
              st = (st-5) 
              st = st < 97 && st > 0 ? st - 96 + 122 : st === 0 ? + 97 : st
              
              
              return !ck.includes(st) ? String.fromCharCode(st) : el
              
            } else if( el === "d" || el === "e") {
              
              return "a"
        
            } else {
              
              return String.fromCharCode(st -= 1)
              
            }
            
          })
    
    
    return char.join("")
  }


  // Code Wars Alternative


  const vowelBack = s => {
    const code = {c:-1,o:-1,d:-3,e:-4}
    
    // Determine the amount of Shifting
    function moveAmount (letter) {
      let move = 9                   // Default to Consonant
      if ([...'aeiou'].includes(letter)) move = -5  // VOWEL
      if (letter in code) move = code[letter] // CODE
      return move
    }
    // Shift letter and wrap around
    function shiftLetter(letter){
      // RANGE...a-z...97-122
      var sl = (letter.charCodeAt() + moveAmount(letter))
      var nl = ""
      // OUT OF BOUNDS Corrections
      if (sl>122) sl = 96 + (sl-122)
      if (sl<97)  sl = 123 - (97-sl)
      
      nl = String.fromCharCode(sl)
      // Check for CODE
      return (nl in code) ? letter : nl
    }
  
    return [...s].map(shiftLetter).join('')
  }


  // Or

  function vowelBack(s){
    console.log(s);
    var ans="";
    var arr="abcdefghijklmnopqrstuvwxyz";
    var ar ="vkbaafpqistuvwnyzabtpvfghi";
    for (var i=0; i<s.length; ++i)
      ans+=ar[arr.indexOf(s[i])];
    return ans;
   }