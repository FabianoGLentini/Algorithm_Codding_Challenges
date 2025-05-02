/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples

["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// My Solution 

function checkThreeAndTwo(array) {

  const num = array.sort().reduce((acc,c,i,arr) => {

    c === arr[i-1] && !!arr[i-1] ? acc[acc.length-1]++ : acc.push(1)
    return acc
  }, [])

  return num.includes(3) && num.includes(2)
}


// Code Wars Alternaives 

function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
    
    return result;
  }, {});
  
  const containsThree = Object.values(counts).some(x => x === 3);
  const containsTwo = Object.values(counts).some(x => x === 2);
  
  return containsThree && containsTwo;
}

// Or

function checkThreeAndTwo(arr) {
  let res = [];
  res.push(arr.filter(x => x === 'a').length)
  res.push(arr.filter(x => x === 'b').length)
  res.push(arr.filter(x => x === 'c').length)
  return res.includes(2) && res.includes(3);
}