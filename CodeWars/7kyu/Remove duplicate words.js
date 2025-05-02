// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My Rist Pass

function removeDuplicateWords (s) {
    const arr = []
    s.split(" ").filter(word => !arr.includes(word) ? arr.push(word): word)
    
    return arr.join(" ")
  }


// Code Wars Alternative 

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')