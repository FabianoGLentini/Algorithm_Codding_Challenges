// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// My First Atempt (which I got stuck at)
function highestRank(arr){
    let maxRepeatedEl = [0,0]
    const setNum = new Set(arr)
    
    console.log(setNum, arr)
    
    for(num of setNum) {
      console.log(num)
      let currCount = [num, arr.filter(el => el === num).length]
      
      console.log(currCount)
      maxRepeatedEl = maxRepeatedEl[1] > currCount[1] ? maxRepeatedEl : currCount
    }
    
    return maxRepeatedEl[0]
  }

// My Second Attempt (which I got stuck at)

function highestRank(arr){
    const countOfElements = arr.reduce((obj, it) => {
      obj[it] = obj[it] +1 || 1
      return obj
    },{})
    
    const maxCount = Math.max(... Object.values(countOfElements))
    
    const maxObjectArr = Object.entries(countOfElements).filter(([key, value]) => value === maxCount)
    
    console.log(maxObjectArr)
    
    console.log(countOfElements)
    return maxObjectArr.length() === 1 ? maxObjectArr[0][0] : "place holder" 
  }

// My JS Solution

function highestRank(arr){
    const countOfElements = arr.reduce((obj, it) => {
      obj[it] = obj[it] +1 || 1
      return obj
    },{})
    
    const maxCount = Math.max(... Object.values(countOfElements))
    
    const maxObjectArr = Object.keys(countOfElements).filter(key => countOfElements[key] === maxCount)
    
    return Math.max(... maxObjectArr)
  }

// Code Wars Alternatives

function highestRank(arr){
    var obj = {};
    arr.forEach(function(elem){
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });
    var keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function(elem){
       if(obj[elem] >= highest)
       {
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
  }

// Or 

const highestRank = arr =>
    arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];

// Chat GPT 4o Recomendation on my code for improvements

function highestRank(arr) {
    // Count occurrences of each element
    const countOfElements = arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    
    // Find the maximum occurrence count
    const maxCount = Math.max(...Object.values(countOfElements));
    
    // Find the elements with the maximum occurrence count
    const mostFrequentNumbers = Object.keys(countOfElements)
      .filter(key => countOfElements[key] === maxCount)
      .map(Number); // Convert keys to numbers
    
    // Return the highest number among the most frequent
    return Math.max(...mostFrequentNumbers);
  }
  
