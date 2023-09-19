// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!



//First Pass

function findMissingLetter(array){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const alphaIso = alphabet.slice(alphabet.indexOf(array[0]),alphabet.indexOf(array[array.length-1]))
    
    return alphaIso.find(el => !array.includes(el))
  }

//Code Wars Alternative, With minor personal adjustments

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)

    for (i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }


//My New Pass For Fun

function findMissingLetter(array){
  const charV =  array.map(el => el.charCodeAt())
  let missing
  
  for(i=charV[0]; i<=charV[charV.length - 1];i++){
    if(!charV.includes(i)) return missing = String.fromCharCode(i)
  }
  
  return missing
}