/*
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

// My Solution 

function sort(initialArray, sortingArray) {
  const newArr = new Array(initialArray.length)
  
  for(let i=0; i< initialArray.length; i++){
    newArr[sortingArray[i]] = initialArray[i]
  }
  
  return newArr
}


// Code Wars Alternative

function sort(initialArray, sortingArray) {
  var n = initialArray.length;
  var result = [];
  for (var i=0; i<n; i++) {
    result[sortingArray[i]] = initialArray[i];
  }
  return result;
}


// Or

const sort = (a, i) => [...Array(a.length)].map((_,k)=> a[i.indexOf(k)]); 