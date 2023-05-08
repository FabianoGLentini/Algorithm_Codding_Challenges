// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



// First Pass

function findAverage(array) {
    if(array === []){
        return 0
    }
    let sum = array.reduce((acc,c)=>{
         return acc+c
    },0)
    return sum/array.length
  }


// Refractor

function findAverage(array) {
    if (array.length === 0) { return 0}

    let sum = array.reduce((acc,c)=> acc+c ,0)

    return sum/array.length
  }

// code wars refractor

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
  