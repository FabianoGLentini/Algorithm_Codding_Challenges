// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.



// My First Solution

function validateWord(s){
    const ck = s.toLowerCase().split("").reduce((obj,it) => (obj[it] = obj[it] + 1 || 1, obj),{})
    
    return Object.values(ck).every((el,_,arr) => el === arr[0]) ? true : Object.values(ck).every(el => el%2 === 0)
  }

  // My ReFractor

  function validateWord(s){
    const ck = Object.values(s.toLowerCase().split("").reduce((obj,it) => (obj[it] = obj[it] + 1 || 1, obj),{}))
    
    return ck.every((el,_,arr) => el === arr[0]) || ck.every(el => el%2 === 0)
  }




// Code Wars Alternative

function validateWord(s){
    let str = s.toLowerCase().split('');
    
    let arr = [];
    let count = 0;
    for (let i = 0; i < str.length; i++){
      count = str.filter(el => el == str[i])
      arr.push(count.length)
      
    }
  return arr.every(el => el == arr[0])
  }

  // Or

  function validateWord(s, c = s.toLowerCase()){
	return c.length % new Set(c).size == 0
}