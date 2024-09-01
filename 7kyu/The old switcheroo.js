// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.


// My JS Soluion

function vowel2index(str) {
    const switch_string = str.split("")
    
    for(let i = 0;  i< switch_string.length; i++) {
      if( ["a","e","i","o","u"] .includes(switch_string[i].toLowerCase())){
        switch_string[i] = i+1
      }
    }
    
    return switch_string.join("")
  }
  
// Code Wars Alternative

function vowel2index(str) {
    var arr = str.split(''),
        i = 0,
        len = arr.length,
        vowels = ['a','e','i','o','u'];
    
    for (i=0; i<len; i++) {
      if ( vowels.indexOf(arr[i].toLowerCase()) > -1 ) arr[i] = i+1;
    }
    
    return arr.join('');
 }

// Chat Recomendation

function vowel2index(str) {
    return str.replace(/[aeiou]/gi, (match, index) => index + 1);
  }
  

