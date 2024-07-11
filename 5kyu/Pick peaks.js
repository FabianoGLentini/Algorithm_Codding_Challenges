/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
*/


// My Soltuion

/*
    Psuedo:
    
    - Must find peaks in an arr returning both the index pos and the value of peeks in an obj with val pos and peak
    - There are plateus that are considered peaks only mention the start peak
    
    Options:
    - make a loop that compares curr el to prio and after to see if it is a peak
    - within that comparing process add a function that will continue the loop if the el curr === el after
    - push index and  val into the obj


*/
function pickPeaks(arr){

  // Obj to hold our index and peaks
  const peak = {
    pos: [],
    peaks: []
  }
  
  // loop 01 to go through each el and compare before and aft el
  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
      peak["pos"].push(i)
      peak["peaks"].push(arr[i])
      
    }else if(arr[i] > arr[i-1] && arr[i] === arr[i+1]){
      // loop to loop through rest of val to cehck if this plateau is a peak
      for(j=i+1; j<arr.length; j++){

        if(arr[i] > arr[j]){
          peak["pos"].push(i)
          peak["peaks"].push(arr[i])
          break
        }
        
        //If plateu increses then it is not a peak, break loop
        if(arr[i] < arr[j]) break
        
      }
      
    }
  }
  return peak
}


// My Refractored Solution

function pickPeaks(arr){
  const peak = {
    pos: [],
    peaks: []
  }
  

  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
      peak["pos"].push(i)
      peak["peaks"].push(arr[i])
      
    }else if(arr[i] > arr[i-1] && arr[i] === arr[i+1]){

      for(j=i+1; j<arr.length; j++){

        if(arr[i] > arr[j]){
          peak["pos"].push(i)
          peak["peaks"].push(arr[i])
          break
        }
        
        if(arr[i] < arr[j]) break
        
      }
    }
  }
  
  return peak
}


// Code Wars Alternatives

function pickPeaks(arr){
  var result = {pos: [], peaks: []};
  if(arr.length > 2) {
    var pos = -1;
    for(var i=1; i<arr.length;i++){
      if(arr[i] > arr[i-1]) {
        pos = i;
      } else if(arr[i] < arr[i-1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}

  // Or
  
  function pickPeaks(arr){
  var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
    .filter(i => i != 0)
    .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
  return {pos:pos, peaks:pos.map(i=>arr[i])}
}

