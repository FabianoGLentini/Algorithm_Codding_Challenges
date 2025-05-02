// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

// My Solution 

function isAlt(word) {
    const vowel = ["a","e","i","o","u"],
          ck = vowel.includes(word[0])
    
    return word.split("").reduce((acc,c,i,arr) => {
      if(!acc) return acc
      
      if(ck){
        if(i % 2 === 0){
          vowel.includes(c) ? acc = true : acc = false
        } else {
          vowel.includes(c) ? acc = false : acc = true
        }
        
      } else {
        if(i % 2 !== 0){
          vowel.includes(c) ? acc = true : acc = false
        } else {
          vowel.includes(c) ? acc = false : acc = true
        }
      }
      
      return acc
    },true)
  }



  // Code Wars Alternative

  function isVowel(x){
    var vowels = ['a','e','i','o','u'];
    return vowels.includes(x);
  }
  
  function boolieArr(str){
    return str.split('').map(function(el){
      return isVowel(el);
    }).join(' ');
  }
  
  function isAlt(word){
   return boolieArr(word).match(/\b(\w+)\s+\1\b/g) === null? true: false;
  }


  // Or

  function isAlt(word) {
    let isVowels = {'a':1,'e':1,'i':1,'o':1,'u':1}, prev, cur;
    for (let i=0; i<word.length; i++) {
      cur = word[i] in isVowels ? 'vowel' : 'consonant';
      if (cur === prev) { return false; }
      prev = cur;
    }
    return true;
  }


  // Or If using Rigix

  function isAlt(word) {
    return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
  }