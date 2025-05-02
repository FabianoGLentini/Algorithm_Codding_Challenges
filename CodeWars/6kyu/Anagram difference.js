// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.
// When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference



// My First Pass Note: fails to consider when both string contains more then one of the same letter

function anagramDifference(w1,w2){
    const ck1 = {},
          ck2 = {}
    let ans = 0
  
    for(i=0;i<w1.length;i++) {
      if(!ck1[w1[i]] &&  w2.includes(w1[i])) {
        ck1[w1[i]] = 1
        
      } else {
        ans++
      }
    }
    
    
    
      for(i=0;i<w2.length;i++) {
      if(!ck2[w2[i]] &&  w1.includes(w2[i])) {
        ck2[w2[i]] = 1
        
      } else {
        ans++
      }
    }
    
    
    return ans
  }
  

  // My Final Solution 

  function anagramDifference(w1,w2){
    const list = str => str.split("").reduce((obj,it) => {
      obj[it] = obj[it] + 1 || 1
      return obj
    },{}),
    
          ck1 = list(w1),
          ck2 = list(w2),
          excludeNum = list(w1+w2)
  
    
    for(key in excludeNum) {
      if(ck1[key] && ck2[key]) {
        excludeNum[key] = Math.abs(ck1[key] - ck2[key])
      }
    }
    
    return Object.values(excludeNum).reduce((acc,c) => acc += c,0 )
  }


  // Code Wars Alternative

  function anagramDifference(w1,w2){
    const stack = {};
    
    for (var c1 of w1) {
      stack[c1] > 0 ? stack[c1]++ : stack[c1] = 1;
    }
    
    let counter = 0;
    
    for (var c2 of w2) {
      stack[c2] > 0 ? stack[c2]-- : counter++;
    }
    
    const result = counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0);
    
    return result;
  }

  // Or

  function anagramDifference(w1, w2) {
    let result = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w2.includes(w1[i])) {
        w2 = w2.replace(w1[i], 1);
        result++;
      }
    }
    return w1.length + w2.length - 2 * result;
  }

  // Or 

  function anagramDifference(w1,w2){
    return strDiff(w1,w2).length + strDiff(w2,w1).length
  }
  
  const strDiff = (a,b) => [...b].reduce((a,x)=>a.replace(x,''),a);
  