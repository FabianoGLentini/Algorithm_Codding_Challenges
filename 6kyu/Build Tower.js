// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)


// My JS Solution

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

// Code WArs Alternatives

function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }

// Or

function towerBuilder(nFloors) {
    var tower = [];
    
    for (var i = 1; i <= nFloors; i++) {
      tower.push(makeFloor((nFloors*2),(i*2)));    
    }
    
    return tower;
}

function makeFloor(width, stars) {
    var padding = Math.floor((width - stars)/2)+1;
    return Array(padding).join(' ') + Array(stars).join('*') + Array(padding).join(' ');            
}