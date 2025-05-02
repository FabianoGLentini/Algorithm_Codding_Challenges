// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
// Confused? Roll your mouse/tap over here

//My First Pass

function addLetters(... letters) {
    letters =  new Array(letters).flat()
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    return alph[(letters.reduce((acc,c) => acc += alph.indexOf(c)+1, 0)%26 -1)] || "z"
  }

//Code Wars Alternative focusing on the charCode as oppose to creating an array of alphabet

function addLetters(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}