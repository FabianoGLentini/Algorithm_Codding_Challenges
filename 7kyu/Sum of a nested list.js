// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

//Code Wars solution breakdown

const sumNested = (arr) => arr.reduce((acc,e) => {
    // we are reducing the arr every time we call it back till enventually it will no longer be an array when that happens we will return the final resutl until then we repeat the process
    if (e instanceof Array) {
        //we say return the acc plus the sumNested(e) so before we add the first lvl we go deeper into the arr we were originally given until we find a none array element that we then can return  as acc + e and slowly go back up reducing every step of the way 
      return acc + sumNested(e);
    }
    //when we find the most inner element that is not an array we can properly add acc + the current element we found. This also allows us to add all the elements within an array together before moving up the chain
    return acc + e;
  }, 0);

  //Code wars

  const sumNested = (arr) => arr.reduce((acc,e) => {
    if (e instanceof Array) {
      return acc + sumNested(e);
    }
    return acc + e;
  }, 0);