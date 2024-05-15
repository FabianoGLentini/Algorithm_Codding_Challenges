// #Sorting on planet Twisted-3-7

// There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

// Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

// 7 Examples from a friend from Twisted-3-7:

// [1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
// [12,13,14] -> [12,14,13]
// [9,2,4,7,3] -> [2,7,4,3,9]
// There is no need for a precheck. The array will always be not null and will always contain at least one number.

// You should not modify the input array!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!




// My Solution With Pseudo Code
/* Pseudo Code :

Objective
  -we want to swap the value the 3 with 7 and vise versa meaning every time we see 3 it is actually worth 7 and whenever we see 7 it is actually worth 3 even in higher digits such as 13 and 27
  
  -We want to then order the array values based on this knowlledge


Options to consider: 
  - We can have array values turn to string and create a supporting function to identify 3 and 7 as swaps of eachother then organise it
  - Maybe use objects in combination with string to contain a different value yet still display 7 or 3 then reorder the array accordingly <-- I want to use this method as it feals more Obj oriented
  - We can have a supporting function that is use if a 3 or 7 is included in the digits that return its new value when sorting the arr <--- this seams promising as an option
*/

function sortTwisted37(array) {
    // Create obj that replaces val of 3 and 7 <-- This step might be convoluted
      const twistDig = { 
      0 : 0,
      1 : 1,
      2 : 2,
      3 : 7,
      4 : 4,
      5 : 5,
      6 : 6,
      7 : 3,
      8 : 8,
      9 : 9
    },
    //Create supporting function that will intake the str number split them and swap their value with obj val then remerge the digits into string them and return the number form of the string
            //Note : need to also save the val of number, it being negative or possitive to then recombine approprietly
          twist = (symb, str) => {
      //swap str digits with twisted digits
      const newStr = str.split("").map(dig => twistDig[dig]).join("")
            
      return symb === "+" ? Number(newStr) : - Number(newStr)
    },
          
    // Make new arr that takes the input array values as strings
          strArr = array.map( num => num >= 0 ? ["+",String(num)] : ["-", String(num)])
      
      
    // use sort method that will tmp replace dig of 3 or 7 with eachother
    strArr.sort(([a,b],[c,d]) => {
      return twist(a,b) - twist(c,d)
    })
    
        // Then turn the tmp val into number to then sort the el position
    
    // use map method on the sorted new arr to return string val to number val
    return strArr.map(num => Number(num[1]))
  }
  


    
  // My Refractored Solution

  function sortTwisted37(array) {
    
    // twistDig obj with the twisted interpretation of 3 and 7
      const twistDig = { 
      0 : 0,
      1 : 1,
      2 : 2,
      3 : 7,
      4 : 4,
      5 : 5,
      6 : 6,
      7 : 3,
      8 : 8,
      9 : 9
    }
      // Supporting Function that return interpreted value using twistDib ogj to sort arr appropriatly
     const twist = (symb, str) => {
          const newStr = str.split("").map(dig => twistDig[dig]).join("")
            
           return symb === "+" ? Number(newStr) : - Number(newStr)
           }

     // strArr is the arr which will store in sub arr both the symb of num as well as the str version of given num
      const strArr = array.map( num => num >= 0 ? ["+",String(num)] : ["-", String(num)])
      
    // Sort the strArr  using twist function to give interpreted value of each input 
    strArr.sort(([a,b],[c,d]) => twist(a,b) - twist(c,d))
    
    //return the num of the sorted array 
    return strArr.map(([symb, num]) => Number(num))  
  }
  



  // Code Wars Alternative

  function sortTwisted37(array) {
    let rd = (d) => ({3:7, 7:3})[d] || d;
    let rn = (n) => +(n+'').split('').map(rd).join('');
    return array.slice().sort((a, b) => rn(a) - rn(b));
  }

    // Or if using Regex

    function sortTwisted37(array) {
        const MAPPING = {7:3,3:7};
        
        return array.slice().sort((a,b) => twist(a) - twist(b));
        
        function twist(number) {
          return parseInt(number.toString().replace(/[37]/g,a=>MAPPING[a]));
        }
      }


  