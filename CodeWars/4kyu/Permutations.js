// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!


// My Attempt

function permutations(string) {
    const arr = []
    
    for(i=0; i<string.length; i++){
      arr.push("" + string[i])
      
      if(string.length > 1) for(j= 1; j<string.length; j++){
        arr[i] += string[j]
      }
    }
    
    return arr
  }

// Code wars solution

function permutations(string) {
    let arr = string.split(''), 
     tmp = arr.slice(), 
     heads = [], 
     out = [];

    if(string.length == 1) return [string];
    arr.forEach(function(v, i, arr) {

      if(heads.indexOf(v) == -1) {

        heads.push(v);
        tmp.splice(tmp.indexOf(v), 1);
        permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
        tmp.push(v);
      }
    });

    return out;
  }


    //My Breakdown of the Code Wars soltuion

    function permutations(string) {
        let arr = string.split(''), //we get our arr that we want permutation from by splitting the string
         tmp = arr.slice(), //we make acopy of the arr to no mutate it and same it in a temporary variable
         heads = [],  
         out = [];
    
        if(string.length == 1) return [string];
        arr.forEach(function(v, i, arr) {
    
          if(heads.indexOf(v) == -1) {
    
            heads.push(v);
            tmp.splice(tmp.indexOf(v), 1);
            permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
            tmp.push(v);
          }
        });
    
        return out;
      }