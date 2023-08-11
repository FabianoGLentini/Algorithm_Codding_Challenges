// Your Task
// You are on a set of stairs that are numbered 0 - 100 from top to bottom. You are given your starting stair number, a stride width (meaning how many stairs you step down at a time) and being walking down. Return an array containing every stair you step on, beginning from the lowest stair. Don't step below 0, it's Lava and you'll burn/fail the Kata.
// A test is in place to check for the presence of for/while to ensure recursion is used so avoid using these terms in your solution.

// If width is 0, clearly you're not going anywhere so please return an empty array.

//First Pass

function stepDown(stair, width, arr){
  
  
    //if arr !== [] arr=[]
    if(!(Array.isArray(arr))){
      arr = []
    }
    
    //Baase Case: stair === 0
    // if stair starts at 0 return []
    //if stair < 0 return the stored stair count in order from smalles to largest
    if(stair < 0 || width <= 0){
      return arr
    }else{
        // unshift current stair number 
    arr.unshift(stair)
    
    //Recursive Case: stair - width
    stepDown(stair - width, width, arr)
    
    }
    return arr
  
}

//My Refractor

function stepDown(stair, width, arr){
    if(!Array.isArray(arr)){ arr = []}

    return stair < 0 || width <0 ? arr : arr.unshift(stair) ? stepDown(stair - width, width, arr) : []
}

// Code Wars Refractor

function stepDown(stair, width) {
    return stair >= 0 ? [...stepDown(stair - width, width), stair] : []
}

//or

const stepDown = (stair, width) => stair < 0 ? [] : stepDown(stair - width, width).concat([stair])