// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


//My Clumsy attempt (this is where I stop, it was very messy when I stop as I was trying a variety of things)

function snail(arr) {
    //square length needs to be put in a var
    const l = arr.length ,  snail = arr[0]
    let count = 0,  crrNum = l, r = l-1, c = 1

    console.log([ `length ${l}`,snail, `count ${count}`])
    crrNum--
    
    
getSnail(crrNum,c,r)   

return `$snail : ${snail}`

    function positiveC(c,r,crrNum){
        for(i=c; i <= crrNum; i++){
            snail.push(arr[i][r])
        }
        return c = i
    }
    function negativeR(r,c,crrNum){
        for(i=r; i>=l-crrNum; i--){
            snail.push(arr[c][i])
        }
        return r=i
    }
    function negativeC(c,r,crrNum){
        for(i=c; i>=l-crrNum; i--){
            snail.push(arr[i][r])
        }
        return c=i
    }

    function positiveR(r,c,crrNum){
        for(i=r; i <= crrNum; i++){
            snail.push(arr[c][i])
        }
        return r = i
    }
    function getSnail(crrNum,c,r){
    positiveC(c,r,crrNum)

    negativeR(r,c,crrNum)
    negativeC(c,r,crrNum)
    positiveR(r,c,crrNum)  
    console.log(c)

    return snail
}

   
    //loop that slowly reduces the column and row index in a specific patern recursion 
      //Base Case : we get 1 twice; once negative once positive
    while(crrNum){
        --crrNum
        let r = l - 1, c = 1
      //Recursion 
        // Round 1 start C + (arr.length - 1) then R - (arr.length-1) then C - (arr.length - 2) + R + (arr.length -2)
        
    
      //store elements in new array as we go through the loop
        //arr start with the first row of the array
      
      ++count
    }
      
      
  }

  snail([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]])

  snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])


  //Code Wars Solution:

  function snail(array) {
    const vector = [];

    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }

  //Code Wars My BreakDown

  function snail(array) {
    //Create our array that will contain the new array we create
    const vector = [];

    //Create our loop that stops once the array is empty thus reaching a lenght of 0 which is a falsy value ending the loop
    while (array.length) {
        //We push the first row into our new arr, as well as shift and flatten the first row of the array, removing it from the original array and shrinking it dowb. NOTE: this is taking the wole row next we need the column at the end
        vector.push(...array.shift());

        //This will allow us to remove the last column of the array and place it in our new array by going through each row and popping the last value and pushing it into the new array essentially replicating us picking whats left of the mors outer column at the end
        array.map(row => vector.push(row.pop()));

        //now we need spin our array so we can loop through the code again with the mentallity that we do row then column row then colum row then colum , etc.. here we first reverse all of our rows making the last row be the top and then we go within each row with our map method and reverse the element in the row array. This essentially visually just spins the square like a sculpter spining its block tro then make the same cuts all over again and slowly shrinking the square.
        array.reverse().map(row => row.reverse());
    }
    return vector;
  }