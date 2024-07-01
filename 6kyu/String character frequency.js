/*In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.
More examples in the test cases. Empty string is not tested.

Good luck!*/

// My Solution

function solve(s){
  const count = s.split("").reduce((obj, it) => {
    obj[it] = obj[it] +  1 || 1
    return obj
  }, {})
  
  const arr = Object.values(count)
  

  for(i=0;i<arr.length;i++){
    arr[i]--

    if(arr.every(el => el === arr[0] || el === 0) || arr.filter(el => el !== 0).every((el,_,tmp) => el === tmp[0])){
      return true
    }
    arr[i]++
  }
    
  return false
}

// Code Wars Alternatives

function allSame(arr) {
  return arr.every(n => n === arr[0]);
}

function solve(s) {  
  const counts = {};
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let letter in counts) {
    counts[letter] -= 1;
    const allCounts = Object.values(counts).filter(n => n !== 0);
    if (allSame(allCounts)) {
      return true;
    }
    counts[letter] += 1;
  }
  return false;
}

  //Or
  
  function solve(s, i=0){
  return i === s.length 
    ? false
    : !((s.length - 1) % (new Set(s.slice(0,i) + s.slice(i+1))).size) || solve(s, i+1);
}

