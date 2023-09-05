
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//First Pass

function duplicateEncode(word){
    let tmp = word.toLowerCase().split("") 
    word = word.toLowerCase().split("")
    let dupCk = new Set(word)
    
    dupCk.forEach( el => {
      let i = tmp.indexOf(el)
      
      tmp.splice(i,1)
    })
    
    dupCk = new Set(tmp)
    
    return word.map(x => {
      return dupCk.has(x) ? ")" : "("
    }).join("")
    
  }

//Code Wars Alternative : with my adjustments of naming for clarity

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( (el, i, arr) => {
        return arr.indexOf(el) == arr.lastIndexOf(el) ? '(' : ')'
      })
      .join('');
  }



