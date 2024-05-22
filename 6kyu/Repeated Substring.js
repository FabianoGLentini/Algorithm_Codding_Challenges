// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

// The input string consists of lowercase latin letters.

// Your function should return :

// a tuple (t, k) (in Python)
// an array [t, k] (in Ruby and JavaScript)
// in C, return k and write to the string t passed in parameter
// Examples:
// "ababab" ---> (t = "ab", k = 3)

// "abcde" ---> (t = "abcde", k = 1)
// because for this string, the minimum substring 't'
// such that 's' is 'k' times 't', is 's' itself.


// My Solution With Pseudo Code

/* function will pass look through the string to find what is being repeated and how many times
    Options:
    
      - use loop within a loop that will slowly add to the strLoop checker and will go into the next loop 
          that will cehck if it indeed repeat by creating additional chunk and comparing the two.
          At the end we can find the times by checking the length of the strLoop string and deviding the total length of givin sting

*/

function f(s) {
    // Create string that will hold the loop pattern. 
    let strLoop = ""
    
    // Loop through givin str to find the repeating patern
    for(i=0;i<s.length;i++) {
      // use arr array to push all the chunks to compare at the end of interation
      const arr = []
      
      strLoop += s[i]
     
      // Loop to create the chunk we will compare to strLoop
      for(ck = 0; ck<s.length; ck += (i+1)) {
        const chunk = s.slice(ck, ck + i+1)
        
        // Push each chunk into an array to compare to the strLoop
        arr.push(chunk)
      }
      
      if(arr.every(el => el === strLoop)) break
    }
    
    return [strLoop, s.length / strLoop.length]
  }


  // My Refracctored Solution

  function f(s) {
    let strLoop = ""
    
    for(i=0;i<s.length;i++) {
      const arr = []
      strLoop += s[i]
     
      for(ck = 0; ck<s.length; ck += (i+1)) {
        const chunk = s.slice(ck, ck + i+1)
        arr.push(chunk)
      }
      
      if(arr.every(el => el === strLoop)) break
    }
    
    return [strLoop, s.length / strLoop.length]
  }


  // Code Wars Alternatives

  function f(s) {
    for(let i = 1;i < s.length;i++){
    if(s.substring(0,i).repeat(s.length / i) === s){
      return [s.substring(0,i),s.length / i]
    }
    }
    return [s, 1]
  }

    // Or Using Regix

    var f = function(s) {
        var m = s.match(/^(.*?)\1+$/);
        return m ? [m[1], s.length / m[1].length] : [s, 1];
      }

