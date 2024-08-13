// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"


// My JS Solution 

function spacify(str) {
    return str.split("").join(" ")
  }