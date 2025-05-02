// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]


// My Solution 

const uniq = a => a.reduce((arr,c,i) => (a[i-1] !== c ? arr.push(c) : "",arr ),[])


// Code Wars Alternative

function uniq(a) {
    return a.filter(function(x,i){return i == 0 || !(a[i-1] == x);});
  }


  // Or

  function uniq(a) {
    return a.filter((n, index, array) => n !== array[index+1]);
  }