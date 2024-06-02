// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


// My Solution

function reverseLetter(str) {
    return str.split("")
                .filter(el => el.charCodeAt() <= 122 && el.charCodeAt() >= 97 || el.charCodeAt() <= 90 && el.charCodeAt() >= 65)
                .reverse().join("")
  }


// Code Wars Alternative Regex

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

