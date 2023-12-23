// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

// My First Pass

function solution(digits){
    //want to return the greates sequence of 5 digits from digitst string
    
    //need to contain the current max val and have a curr val to hold the next val
    let curr, max = 0
    
    //we need to loop through the digits but not go beyond digits.length - 6 so we alway have 5 digits
    for(i=0;i<digits.length-1;i++){
      curr = digits.slice(i,i+5)
      max = Math.max(Number(curr),max)
    }
    
    
    //need to return the 5 digits as a string
    return max
  }

  // My code without psudo code

  function solution(digits){
    let curr, max = 0
    
    for(i=0;i<digits.length-1;i++){
      curr = digits.slice(i,i+5)
      max = Math.max(Number(curr),max)
    }
    
    
    return max
  }