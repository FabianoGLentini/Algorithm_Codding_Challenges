// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// My Fiirst Pass

function capitalize(s){
    let a = "", b = ""
    for(i=0;i<s.length;i++) {
      if(i%2) {
        a += s[i]
        b += s[i].toUpperCase()
      } else {
        a += s[i].toUpperCase()
        b += s[i]
      }
    }
    return [a,b]
    
  };

  // Code Wars Alternative

  function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };

  //or

  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
  