// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

//My First Pass , that dident work as I used word[0] instead of word.slice(0,1) to select the first letter

String.prototype.camelCase=function(){
    let str = this.split(" ").map( word => word[0].toUpperCase() + word.slice(1))
    
    return str.join("")
  }

//Code Wars solution

String.prototype.camelCase=function(){
    //need to use slice as oppose to w[0] otherwise code will not work
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
  }