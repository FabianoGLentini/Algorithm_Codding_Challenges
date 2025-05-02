// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


//First Pass

function sortArray(array) {
    const newArr = array.map(el => el%2 === 0 ? el : "x")
    const odd = array.filter(el => el%2).sort((a,b) => a - b)
    
  
    while(odd.length){
     let i = newArr.indexOf("x")
      
      newArr[i] = odd.shift()
    }
    
    return newArr
  }

//Code Wars Alternatives

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }