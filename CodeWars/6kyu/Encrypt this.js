// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//My First Pass

var encryptThis = function(text) {
    let strNew = text.split(" ")
    
   return strNew.map(word => 
                     word.split("").map((l,i) => 
                                        i === 0 ? l.charCodeAt() 
                                                  : word.length > 2 &&  i == 1 ? word[word.length - 1]
                                                   : word.length > 2 && i == word.length -1 ? word[1]
                                                    :l).join("")).join(" ")
  
    return strNew
  }
  
//Code Wars Alternative

const encryptWord = word => 
  word[0].charCodeAt() +
    (word.length > 2 ? word[word.length - 1] : '') +
    (word.length > 2 ? word.slice(2, -1) : '') +
    (word[1] || '')


const encryptThis = text => 
  text.split(' ')
    .map(word => encryptWord(word))
    .join(' ')

  //My Adjustments to the code wars alternative

  const encryptThis = text =>{ 
  return text.split(' ')
            .map(word => encryptWord(word))
            .join(' ')

    function encryptWord(word) { 
        return word[0].charCodeAt() +
         (word.length > 2 ? word[word.length - 1] : '') +
         (word.length > 2 ? word.slice(2, -1) : '') +
         (word[1] || '') 
    }
}