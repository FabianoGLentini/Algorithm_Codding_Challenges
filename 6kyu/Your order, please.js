// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//First Pass

function order(words){
    //need to create an array to contain the new order of our sentence
    const newSentence = []
    
    //need to split our string into individual words
    const wordsArr = words.split(" ")
    
    //loop through each word
    wordsArr.forEach(word => {
            //need to go through each word find the numnber within it
        const position = word.match(/\d+/g)
        
          //we need to place that word to the specified number  -1 into the new array 
        newSentence[position-1] = word
    
    })
    
    //we need to join the new array together into a string   
    return newSentence.join(" ")
}

//or without regex

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }

//Refractor

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }   