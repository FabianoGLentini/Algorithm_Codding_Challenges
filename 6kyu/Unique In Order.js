// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//First Pass

var uniqueInOrder=function(iterable){
    let arr
    let res = []
    
    
    if(!Array.isArray(iterable)){
        arr = iterable.split("")
    }else{
      arr = iterable
    }
    
    for(i=0; i<arr.length; i++)
      if(arr[i] !== arr[i-1]){
        res.push(arr[i])
      }
    
    return res
}

//Refractor

var uniqueInOrder=function(iterable){
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    }
    return res;
  }

  //or

  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//or

var uniqueInOrder=function(iterable){
    let arr = [...iterable]
    let res = []
    
    for(i=0; i<arr.length; i++)
      if(arr[i] !== arr[i-1]){
        res.push(arr[i])
      }
    
    return res
}