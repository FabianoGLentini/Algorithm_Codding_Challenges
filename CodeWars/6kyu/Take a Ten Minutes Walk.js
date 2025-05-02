// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// My Solution

/*
  Pseudo:
  
    Steps:
    
    - Check if the arr length !== 10 to insure it is even possible to be a 10 min walk
    - we can work with the idea that our starting point is (0,0) as in (hoxizontal, vertical)
      - values of w or e is for Horizontal and n or s is for vertical translation
        - we will say w and s are worth -1 while e and n are +1
    - we will loop through the array and apply the translation to variable being horizontal and vertical 
    
    - at the end we check if both horizontal and vertical var are === 0 and return a bolean value 
*/


function isValidWalk(walk) {
    if(walk.length !== 10) return false
    
    let horizontal = 0, 
        veritcal = 0
    
    walk.forEach(direction => {
      if(direction === "w" || direction === "e") horizontal += direction === "w" ? -1 : +1
      
      if(direction === "s" || direction === "n") veritcal += direction === "s" ? -1 : +1
    })
    
    return horizontal === 0 && veritcal === 0
  }

  // Code Wars Alternatives

  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

// Or

function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }

// Or

function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }

// Or

function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }