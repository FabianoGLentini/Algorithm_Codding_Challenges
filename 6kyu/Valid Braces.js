// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

//My First Attempt

function validBraces(braces){
    const ck = []
    braces = braces.split("")
    
    for(i=0; i<braces.length; i++){
      for(j=i+1; j<braces.length; j++){
        if(braces[i] ==="(" && braces[j] === ")"){
          braces[i] = "x"
          braces[j]= "x"
        }else if(braces[i] === "{" && braces[j] === "}"){
          braces[i] = "x"
          braces[j] = "x"
        }else if(braces[i] === "[" && braces[j] === "]"){
          braces[i] = "x"
          braces[j] = "x"
        }
      }
    }
  
     return braces.every( el => el === "x")
  }
    
//Code Wars Solution 

function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }

//My Code Wars Solution Breakdown / adjust

function validBraces(braces){
    //we create an obj that has opening brakets as the key and the closing brakets as its equal???
    const matches = { '(':')', '{':'}', '[':']' },
        //we have an array of where we will put all the valid braces in
         stack = [];
    
    // we need a var to hold our opening braces to compare
    let currentChar;
  
    //loop through eachy braces one by one
    for (i=0; i<braces.length; i++) {
        //we assign currrent brace that we are checking in the string list
      currentChar = braces[i];
  
      // we pull up the object matches with the key of the currentChar and see if the key exist and if yes that means it an opening brace and we will push it to our stack to check letter on when we get a closing brace.
      if (matches[currentChar]) { 

        // so if the currentChar is actually an opening braket we will push it in our stack
        stack.push(currentChar);

      } else { 
        //else we check if the currentChar is not equal to the brace we pop up from the stack. Note the stack contains opening braces and when we do matches[stack.pop] we are actually checking the value of the object to see if it does match if it does we dont need to do anything else as it means that the braces are appropriatly matching. But if we pop and it gives us a different opening brace then what the current closing brace is then means the bracing order dont match and we need to return false
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
    
    //we need to do one final check after the for loop has gonne through all the char and that is to check if there is any opening braces left in the stack, if their is then that means the brace was never closed and thus is invali and we must return the value of "false"
    return stack.length === 0; 
  }