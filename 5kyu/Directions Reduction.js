// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.


// My JS Code Wars First Attempt (does not provide all the direstions needed)

function dirReduc(arr){
    const givenDirections = arr.reduce((obj,it) => {
      obj[it] = obj[it] + 1 || 1
      return obj
    },{})
    
    const horizontalDirection = givenDirections["NORTH"] == givenDirections["SOUTH"] ? null : givenDirections["NORTH"] > givenDirections["SOUTH"] ? "NORTH" : "SOUTH",
          verticalDirection = givenDirections["WEST"] == givenDirections["EAST"] ? null : givenDirections["WEST"] > givenDirections["EAST"] ? "WEST" : "EAST"
    
    return !horizontalDirection && !verticalDirection ? [] : horizontalDirection && verticalDirection ? [horizontalDirection,verticalDirection] : horizontalDirection ? [horizontalDirection] : []
  }
  
  
// My Second Attempt (Got closer but the ordering of the array doesent match the way the output is expected)

function dirReduc(arr){
    if(arr.length === 4 && arr.every((el,i) => el != arr[i-1])) return arr
    const simplifiedDirection = arr
  
    for(i=0;i<arr.length;i++){
      let curr = simplifiedDirection[i]
      
      if(curr === null) continue
      
      if(curr === "NORTH"){
        if(simplifiedDirection.indexOf("SOUTH")>=0){
          simplifiedDirection[i] = null
          simplifiedDirection[simplifiedDirection.indexOf("SOUTH")] = null
          
        }
        
        
      } else if (curr === "SOUTH") {
        if(simplifiedDirection.indexOf("NORTH")>=0){
          simplifiedDirection[i] = null
          simplifiedDirection[simplifiedDirection.indexOf("NORTH")] = null
        }
        
      } else if (curr === "WEST") {
        if(simplifiedDirection.indexOf("EAST")>=0){
           simplifiedDirection[i] = null
          simplifiedDirection[simplifiedDirection.indexOf("EAST")] = null
        }
      } else if (curr === "EAST") {
        if(simplifiedDirection.indexOf("WEST")>=0){
           simplifiedDirection[i] = null
          simplifiedDirection[simplifiedDirection.indexOf("WEST")] = null
         
      }
    }
      
  }
    return simplifiedDirection.filter(el => !!el)
  }


  // Code Wars Solution (Note: I now realize taht I needed to check if the opposites were directly after one another)

  function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }

  // Or

  function dirReduc(arr){
	var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
	return arr.reduce(function (a, b, i) {
  	opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
  	return a
  }, [])
}