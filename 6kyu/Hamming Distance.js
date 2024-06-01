// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two inputs are ASCII strings of equal length.


// My Solution

function hamming(a,b) {
    const l = a.length
    let num = 0
    
    for(i=0;i<l;i++) {
      if(a[i] !== b[i]) num++
    }
    
    return num
  }


// Code Wars Alternatives

function hamming(a,b) {
    return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
  }


  // Or

  const hamming = (str1, str2) => {
    let distance = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) distance++;
    }
    return distance;
  }