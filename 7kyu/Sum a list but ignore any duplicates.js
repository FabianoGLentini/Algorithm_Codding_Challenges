// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.


// My Solution

function sumNoDuplicates(numList) {
    const count = numList.reduce((obj, it) => {
      obj[it] = obj[it] +1 || 1
      return obj
    },{})
    
    
    return numList.reduce((acc,c) => acc += (count[c] === 1 ? c : 0 ),0)
  }


  // Code Wars Alternative

  function sumNoDuplicates(arr) {
    let uniqueArr = [];
    let sum = 0;
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueArr.push(num);
            sum += num;
        }
    });
    return sum;
}


// Or

function sumNoDuplicates(numList) {
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
    return uniqueArr.reduce((x,y)=>x+y,0);
    }