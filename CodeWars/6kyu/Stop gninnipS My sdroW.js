// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//First Pass

function spinWords(string){
    const stringArr = string.split(" ")
    
    return stringArr.map((word) => {
      if(word.length < 5){
        return word
      }else{
        return (word.split("").reverse().join(""))
      }
    } ).join(" ")
  }

//Refractor

function spinWords(string){
    const stringArr = string.split(" ")
    
    return stringArr.map( word => word.length < 5 ? word : word.split("").reverse().join("")).join(" ")
  }
