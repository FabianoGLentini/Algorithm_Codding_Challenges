/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/


// My Attempted Solution using an article as guidance

function permutations(str) {

	let result = []
  
  if(str.length === 0) return []
  if(str.length === 1) return [str]

  for(let i = 0; i < str.length; i++){

    const currStr = str[i]
    const remainingStr = str.slice(0,i)
              .concat(str.slice(i+1))
    
    const remainingNumPermuted = permutations(remainingStr)
    
    for(let j = 0; j < remainingStr.length; j++){
      const permutedArr = [currStr]
            .concat(remainingStr[j])
      
      result.push(permutedArr)
    }
  }
  return result.map(el => el.join(""))
}


// Code War Solution

function permutations (string) {
  if (string.length === 1) { return [string]; }

  var split = string.split("")
    , perms = []
    , i, l;

  for(i = 0, l = split.length; i < l; i++) {
    var remainder = split.slice(0)
      , firstChar = remainder.splice(i, 1)[0]
      , remainderPerms = permutations(remainder.join(""));

    remainderPerms.forEach(function (perm) {
      perm = firstChar + perm;
      if (perms.indexOf(perm) === -1) { perms.push(perm) };
    });
  }

  return perms;
}


    // Solution Breakdown
    
    function permutations (string) {
  if (string.length === 1) { return [string]; } // Base case or Terminating case to end recurstion. Note we retrun the str within an array literal to bubble back up to our permutation function

  var split = string.split("") // We turn str to an arr form to allow us to permute the input
    , perms = [] // arr container to contain our various permutations of said input str
    , i, l; // i will keep track of our index... We might not need to declare it outside of the for loop... Note l will be used to represent the length of current string

  for(i = 0, l = split.length; i < l; i++) { // Loop starts ourpermutation we will go through each possible combo with current element
    var remainder = split.slice(0) // we create a shallow copy of our split arr which contains our str input as an arr
      , firstChar = remainder.splice(i, 1)[0] // We pull out a character from the shalow copy we just created of our input. In doing so we mutate the shallow copy removind indicated character
      , remainderPerms = permutations(remainder.join("")); // Join what is left of our shalow copy after being mutated and recurse it through our function

    remainderPerms.forEach(function (perm) { //we start the process of inputing our permutation in our perm arr
      perm = firstChar + perm; // combine our character to create a version of permutated input string
      if (perms.indexOf(perm) === -1) { perms.push(perm) }; // checks if permutation already exist in our perm arr
    });
  }

  return perms;
}