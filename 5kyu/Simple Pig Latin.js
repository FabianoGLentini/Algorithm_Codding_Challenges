// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//First Pass

function pigIt(str){
    const wordArr = str.split(" ")
    let newWordArr = []
    let symbolList = ["?","!","."]

    for( i = 0; i<wordArr.length; i++){
      if(symbolList.includes(wordArr[i]) && wordArr[i].length <= 1){
          newWordArr += wordArr[i]
  
      }else if(wordArr[i].includes(symbolList)){
          let endSentenceSymbol = wordArr[i].split("").pop(wordArr[wordArr.length-1])
          wordArr[i] = wordArr[i].replace(symbolList,"")
          newWordArr += (wordArr[i] + (wordArr[i][0] + "ay")).split('').slice(1).join("") + endSentenceSymbol
  
      }else{
      newWordArr += (wordArr[i] + (wordArr[i][0] + "ay ")).split('').slice(1).join("")
  
      }
    }
    return newWordArr.trim()
  
    }


    // Code wars Refracto recomendation

    function pigIt(str) {
        const arrayWord = str.split(' ');
        return arrayWord.map(function(word) {
          let firstLetter = word.charAt(0);
          return word.slice(1) + firstLetter + 'ay';
        }).join(' ');
      }