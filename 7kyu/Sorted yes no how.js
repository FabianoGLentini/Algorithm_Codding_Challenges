// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


// My JS Solution

function isSortedAndHow(array) {
    const ascendingSorted = array.slice().sort((a,b) => a - b),
          descendingSorted = array.slice().sort((a,b) => b-a)
    
    const orderCk = (sortedArr, ogArr) => {
      let ck = true
      
      for(i=0;i<sortedArr.length;i++) {
        if(sortedArr[i] !== ogArr[i]) {
          ck = false
          break
        }
      }
      
      return ck
    }
    
   return orderCk(ascendingSorted,array) ? "yes, ascending" : orderCk(descendingSorted,array) ? "yes, descending" : "no"
  }

// Code Wars Alternatives

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

// Or

const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
  }

