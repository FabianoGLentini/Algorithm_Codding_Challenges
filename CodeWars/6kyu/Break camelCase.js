// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//First Pass

function solution(str) {
    const capitalsL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let camalCase = str
    
  capitalsL.forEach(el => {
    camalCase = camalCase.replaceAll(el,` ${el}`)
  })
    
    return camalCase
}

//Code Wars suggestion

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

//Code Wars Refractor

const solution = string => {
    return [...string].map((char) => {
      return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
  }