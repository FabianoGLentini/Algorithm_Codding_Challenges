// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//First Pass

function high(sentence){
    //split sentence into arr of words and place in a var called wordsArr
    const wordsArr = sentence.split(" ")
    
    //declare a var that will contain the char sum value of each word as an array
    //go through the array words and create new arr of sum char value of each word, mostlikely using map() method
    const wordsCharValue = wordsArr.map(word => {
      
      //create var that will contain the value of the char sum of the word
      let charSum = 0
      
      //loop through each letter of a word finding the char value and adding it with eachother returning the word char value sum
      for(i = 0; i < word.length; i++){
        
        //when using charCodeAt we need to reduce it by -96 as char "a" start with value 97 on the ASCII value tree
        charSum += word.charCodeAt(i) - 96
      }
      
      //return the final charSum value to our new array that is being mapped
      return charSum
      
    })
    
    //need to find the index position of the max value of wordsCharValue so we can return the word of that same index position from wordsARR
    const index = wordsCharValue.indexOf(Math.max(...wordsCharValue))
    
    //need to return the highest word sum char value, important that our return is the str word itself which has the highest char value sum
    
    return wordsArr[index]
  }



//Refractor my code

function high(sentence){
    const wordsArr = sentence.split(" ")

    const wordsCharValueArr = wordsArr.map(word =>{
        let charSum = 0
        for(i=0; i<word.length; i++){
            charSum += word.charCodeAt(i) -96
        }
        return charSum
    })

    const index = wordsCharValueArr.indexOf(Math.max(...wordsCharValueArr))

    return wordsArr[index]
}

//Codewars option

function high(x){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const words = x.split(' ')
    const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
    
    return words[scores.indexOf(Math.max(...scores))]
  }