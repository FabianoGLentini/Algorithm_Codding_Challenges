// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//First Pass

const reverseSeq = n => {
    const arr = []
    
    for(i=1; i<= n; i++){
      arr.unshift(i)
    }
    
    return arr
  };

  //Refractor code wars 

  const reverseSeq = n => {
    return Array(n).fill(0).map((_, i) => n - i );
  };