// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I


// My Solution

function drawStairs(n) {
    const arr = [],
          ck = n
    
    
    do {
      let stair = n === ck ?  " ".repeat(n-1) + "I" : " ".repeat(n-1) + "I\n"
      arr.unshift(stair)
    } while(--n)
      
      return arr.join("")
  }


// Code Wars Alternative 

const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");


  //Or

  function drawStairs(n) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
      result[i] = `${' '.repeat(i)}I`;
    }
    
    return result.join('\n');
  }