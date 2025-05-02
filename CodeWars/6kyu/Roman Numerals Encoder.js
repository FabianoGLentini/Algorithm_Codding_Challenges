// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// My Attempt 

function solution(number){
    let romanN = "",
        num = number
    
    if(num/1_000 >= 1) romanN += "M".repeat(Math.floor(num/1_000)), num = num % 1_000
    if(num/500 >= 1) romanN += "D".repeat(Math.floor(num/500)), num = num % 500
    if(num/100 >= 1) romanN += "C".repeat(Math.floor(num/100)), num = num % 100
    if(num/50 >= 1) romanN += "L".repeat(Math.floor(num/50)), num = num % 50
    if(num/10 >= 1) romanN += "X".repeat(Math.floor(num/10)), num = num % 10
    if(num/5 >= 1) romanN += "V".repeat(Math.floor(num/5)), num = num % 5
    if(num/1 >= 1) romanN += "I".repeat(num/1)
    
    return romanN
  }


// Code Wars Solution With My Own Minor Adjustments

  function solution(number){
    // convert the number to a roman numeral
  const  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  let ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }


  //My breakdown of hte solution

  function solution(number){
    // convert the number to a roman numeral
  const  roman = {M:1000, CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 } // We create an obj containing all the options for roman numerals -- Note: We also add the extra opions of the segment minus 100 or 10 or 1 depending on its digit range following segment for each main number EX: CM = 900 which is M(1000) - C(100), XL = 40 which is L(50) - X(10), IV = 4 which is V(5) - I(1)
  
  let ans = '';                                                                              // We create a variable to contain our ans in string form

  while(number>0){                                                                         // We start our while loop that will check if our number is still above 0
      
    for(a in roman){                                                                     // We start a for in loop to go through our roman obj
          
        if(roman[a]<=number){                                                          // We check if the roman[a] property is smalle or equal to number if not we loop to the next property until the statement is true in which we execute teh if statement which includes a break to stop the for in loop and go back to the while loop 
            ans += a                                                                  // We start by adding the letter or letters to our ans
            number-=roman[a]                                                         // We remove teh roman number value from the starting number

            break                                                                  // We break the loop to prevent the for in loop to go ahead of itself and add more letter consecutively. This sends us back to the while loop to restart the process
        }
              
      }
  }
  
  return ans;                                                                // Return ans
  }