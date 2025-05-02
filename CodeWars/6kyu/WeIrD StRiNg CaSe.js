// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"


//My First Pass

function toWeirdCase(string){
    const wordArr = string.split(" "), ans = []
    
    for(i=0; i<wordArr.length; i++){
      let newWord = ""

      for(j=0; j<wordArr[i].length; j++){
        newWord += j%2 ? wordArr[i][j].toLowerCase() : wordArr[i][j].toUpperCase()
      }

      ans.push(newWord)
    }
    
    return ans.join(" ")
  }


  // My Refractor

  function toWeirdCase(string){
    return string.split(" ").reduce((acc,c) => {
        let newWord = ""

        for(i=0; i<c.length; i++){
            newWord += i%2 ? c[i].toLowerCase() : c[i].toUpperCase()
        }

        acc.push(newWord)

        return acc

    },[]).join(" ")
  }


    // My Alternative Refractor

    function toWeirdCase(string){
        return string.split(" ").reduce((acc,c) => {
    
            for(i=0; i<c.length; i++){
                acc += i%2 ? c[i].toLowerCase() : c[i].toUpperCase()
            }
            
            acc += " "

            return acc

        },"").trim()
      }


// Code Wars Alternative

function toWeirdCase(string){
    return string.split(' ').map(function(word){
      return word.split('').map(function(letter, index){
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('');
    }).join(' ');
  }


    //Code Wars Interesting Alternative

    function toWeirdCaseCharacter(chr, index){
     return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
    }

    function toWeirdCaseWord(word){
     return word.split("").map(toWeirdCaseCharacter).join("");
    }

    function toWeirdCase(string){
     return string.split(" ").map(toWeirdCaseWord).join(" ");
    }