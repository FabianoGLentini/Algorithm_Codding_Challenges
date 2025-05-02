// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// My Pass

function averageString(str) {
  
    const numStr = {
      zero : 0,
      one : 1,
      two : 2,
      three : 3,
      four : 4,
      five : 5,
      six : 6,
      seven : 7,
      eight : 8,
      nine : 9
    },
          
    arr = str.split(" "),
    l = arr.length,
    avg = Math.floor(arr.map(el => numStr[el]).reduce((acc,c) => acc += c, 0) /l)
    
    
    return avg <= 9 && avg >= 0 ? Object.keys(numStr).find(key => numStr[key] === avg) : "n/a"
  }

  // Code Wars Alternative

  function averageString(str) {
    let obj = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return obj[Math.floor(str.split(' ').map(x=>obj.includes(x)?obj.indexOf(x):NaN).reduce((a, b)=>a+b)/str.split(' ').length)]||'n/a'
  }