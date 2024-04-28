// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// My First Pass 

function twistedSum(n) {
    let sum = 0
    
    do {
      sum += String(n).split("").reduce((acc,c) => acc += +c, 0)

    } while(n--)
    
    return sum
  }


// Code Wars ALternative

function twistedSum(n) {
    return [...Array(n + 1).keys()].reduce((a, b) => a + [...""+b].reduce((x, y) => x + +y, 0), 0);
  }

  // Or

  function twistedSum(n) {
    let out = 0;
    for (let i = 1; i <= n; i++) {
      if (i.toString().length > 1) {
        i.toString().split('').forEach(el => {
          out += parseInt(el);
        })
      } else {
        out += i;
      }
    }
    return out;
  }