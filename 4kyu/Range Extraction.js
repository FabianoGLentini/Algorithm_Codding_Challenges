// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org


// My Solution Including Pseudo Code

/* Psuedo

Goal:

  create a string from a givin array that essetially says the range of continues number with a dash between the start and end number and seperating non continueous cound via coma.

  Options:

    - Loop through each element in array ans add it to the string if current element is not the next number from prior element. If it is you continue to the next number.
        If the curr el has a prio number that is a continuation of the curr one but the next number is not add curr number with dash and end with a comma to start the next cicle.
        If the curr el is not between a continuation at all add el with comma and proceed to next element.

*/

function solution(list){
    // str var that will contaiun our series
    
    let str = ""
    
    // Loop through each element from the list arr to determine which element are part of the arr series and which is a jump
    
    list.forEach((el,i,arr) => {
      
      // If this is the first element of array dont check anything else and push element
      if(i === 0) {
        
        // check if it is part of the start of a series
        if(el === arr[i+1] - 1 && el === arr[i+2] -2) return str += el
        
        return str += el +","
      
        
      // If this is the last element of the array add it to str with nothing at the end, but also check if it is the end of a series and if it would need a dash prior.
      } else if (i === list.length - 1) {
  
        // if the last el of arr is indeed the end of a series add a dash before adding final el
        if(el === arr[i-1] + 1 && el === arr[i-2] + 2) return str += el
        
        // if the final el of the array is not part of the series just add the el to string
        return str += el
        
        
      // check if curr el is in the midle of a valid series if yes jurt continue to the next loop without doing anything to the str
      } else if (el ===  arr[i-1] + 1 && el ===  arr[i+1] - 1) {
        
        if(str[str.length - 1] !== "-") return str += "-"
        
        
      // after confirming if the el is not in the midle of a series, we can check if this el is part of the start of the series and add it to the str accordingly
      } else if (el === arr[i+1] - 1 && el === arr[i+2] - 2) {
       return str += el
        
        
      // else if all the checks dont pass that means we are at the end of a series within the arr and should add the dash, el and comma to the str
      } else {
        return str += el + ","
      }
    })
    
    
    return str
  }




  // My ReFractored Solution


  function solution(list){
    let str = ""
    
    
    list.forEach((el,i,arr) => {
      
      if(i === 0) {
        
        if(el === arr[i+1] - 1 && el === arr[i+2] -2) return str += el
        
        return str += el +","
      
        
      } else if (i === list.length - 1) {
  
        if(el === arr[i-1] + 1 && el === arr[i-2] + 2) return str += el
        
        return str += el
        
        
      } else if (el ===  arr[i-1] + 1 && el ===  arr[i+1] - 1) {
        
        if(str[str.length - 1] !== "-") return str += "-"
        
        
      } else if (el === arr[i+1] - 1 && el === arr[i+2] - 2) {
       return str += el
        
        
      } else {
        return str += el + ","
      }
    })
    
    
    return str
  }



// Code Wars Alternative Using Functional Programming

function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}


// Or 

solution = (list)=>list.reduce((acc,curr,i) => {
    if (i==0) return curr.toString();
    if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
    if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
    return acc+","+curr;
  });