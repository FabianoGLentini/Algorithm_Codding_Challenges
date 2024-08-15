// Task :
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .


// My JS Solution

/*
  Goal:
    - Sum Arr numbers and find how much you need to add to get the closest prime number if the sum isent a prime num to biggin with
    
  
  Steps Rough Pass:
    - Create var of arr sum named arrSum
    - Check if arrSum is a prime num
      - To check if arrSum is Prime loop and find modulus for each number starting at 2 and ending at sqrt(arrSum). If at any point we modulus === return false to the if statement and continue to the else
    - if no, find next prime num and store in var called nextPrime. Else return 0
      - create var called nextPrimeCk to contain arrSum
      - create loop that will add 1 to nextPrimeCk and will stop once we find true prime 
        - we loop within the loop using same built loop prime checker
      
*/

function minimumNumber(numbers){
  
    // prime checker function
    const primeCk = num => {
      for(i=2; i <= Math.sqrt(num); i++){
        if(num%i === 0) return false
      }
      
      return true
    }
    
    let nextPrimeSearch = numbers.reduce((acc,c) => acc += c,0),
        countAddPrime = 0
    
    while(!primeCk(nextPrimeSearch)){
      ++countAddPrime
      ++nextPrimeSearch
    }
    return countAddPrime
  }

  // My Refractored Code

  function minimumNumber(numbers){
    // prime checker function
    const primeCk = num => {
      for(i=2; i <= Math.sqrt(num); i++){
        if(num%i === 0) return false
      }
      
      return true
    }
    
    let nextPrimeSearch = numbers.reduce((acc,c) => acc += c,0),
        countAddPrime = 0
    
    while(!primeCk(nextPrimeSearch + countAddPrime)){ ++countAddPrime}
  
    return countAddPrime
  }

  // Code Wars Alternatives

  function minimumNumber(numbers){
    let sum = numbers.reduce((a,b) => a + b)
    for(let i = sum; ; i++) {
      if(prime(i)) return i - sum
    }
    function prime(a) {
      if(a < 2) return false
      if(a % 2 === 0) return a === 2
      for(let i = 3; i * i < a; i += 2) {
        if(a % i === 0) return false
      }
      return true
    }
  }

// Or

function isPrime (n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function minimumNumber(numbers){
    let count = 0;
    let sum = numbers.reduce((a,b) => a+b);
  
    if (isPrime(sum)) return 0;
  
    while(!isPrime(sum)) {
      sum++;
      count++;
    }
    return count;
  }