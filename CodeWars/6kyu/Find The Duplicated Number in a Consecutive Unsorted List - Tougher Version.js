// Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

// Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.


// My Attempt That Timed Out 


    // Atmp 01
    function findDup(array) {
      return array.find(el => array.indexOf(el) !== array.lastIndexOf(el))
    }

    // Atmp 02
    function findDup(array) {
      for(i=0;i<array.length; i++) {
        if( i !== array.lastIndexOf(array[i])){
          return array[i]
        }
      }
    }

// My Successfull Attempt

function findDup(array) {
    return array.sort().find( (el,i) => el === array[i+1])
  }



// Code Wars Alternatives

  var findDup=function(arr){
    return arr.reduce(function(a,b){return a+b;})-arr.length*(arr.length-1)/2;
  }

  // Or

  var findDup=function(arr){
    var a = 0, found = {};
    while( !found[arr[a]] ) found[arr[a++]]=true
    return arr[a]
  }

  // Or

  function findDup( arr ) {
    var n  = arr.length,
        total = arr.reduce((ctr, val) => ctr + val, 0),
        expected = n * (n - 1) / 2;
    return total - expected;
  }
  