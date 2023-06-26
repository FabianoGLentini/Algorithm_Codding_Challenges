// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//First Pass

function findShort(str){
    const arr = str.split(" ")
    
    const wordLengthArr = arr.map(word=> word.length)
  
    return Math.min(...wordLengthArr)
  }

//Code wars refractor recomendation

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}