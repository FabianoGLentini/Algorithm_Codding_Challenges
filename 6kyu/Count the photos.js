// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.

// Task
// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.


// Examples
// For ">>." -> 2 photos were taken
// For ".>>" -> 0 photos were taken
// For ">.<." -> 3 photos were taken
// For ".><.>>.<<" -> 11 photos were taken



// My First Solution (Passes the test but times out on longer inputs)


/* Pseudo:

    Options:
    - split and create an array that contains the index position of the cameras "." 
    then go through the original string checking what direction and how many cameras are above or billow indicated car index based off direction

*/


function countPhotos(road){
    const camArr = road.split("").map( (el, i )=> el === "." ? i : -1),
          carCaught = road.split("").map((el,i) => el === ">" ? camArr.filter(el => el >= i).length : el === "<" ? camArr.filter(el => el <= i && el !== -1).length : 0)
                                         
    
    
    return carCaught.reduce((acc,c) => acc += c,0)
  }


// Code Wars Solution

// Count the number of photos take from cars driving towards a camera.
function countPhotos(road) {
    let result = 0,
        cam_count = 0,
        right_count = 0;
    for (let i = 0; i < road.length; ++i) {
        if (road[i] == '.') {
            result += right_count;
            cam_count += 1;
        }
        else if (road[i] == '<') {
            result += cam_count;
        }
        else if (road[i] == '>') {
            right_count += 1;
        }
    }
    return result;
}



// Or

function countPhotos(road) {
    const items = { ".": 0, ">": 0, "<": 0 };
    let photos = 0;
    
    for (const char of road) {
      items[char]++;
      
      if (char === ".") photos += items[">"];
      if (char === "<") photos += items["."];
    }
      
    return photos;
  }