// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//First Pass

/*Find all the number of 0 in the arr remove them from teh arr and push the same amount of zeros at  the end of the arr*/

function moveZeros(arr) {
    //find the number of zeros in the arr and place number in var
    const numberOfZeros = arr.filter(el=> el === 0).length
   
    //create an arr to contain arr without zero 
    const newArr = arr.filter(el=> el !== 0)
   
    //loop to push the amount of zeros into new arr
   for(i=0; i<numberOfZeros; i++){
       newArr.push(0)
   }
   return newArr
   }
   
//Code wars refractor suggestion

var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }