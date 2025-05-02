// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.


// Examples:


// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"


// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.


// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


//My Attempt 


function encrypt(text, n) {
    if(n<0 || text === "") return text
    
    const odd = [], even = []
    text = text.split("")
    
    for(i=0; i<n; i++){
      
      for(j=0; j<text.length; j++){
        j%2 !== 0 ? odd.push(text[j]) : even.push(text[j])
      }
      text = odd.concat(even)
      
    }
    return text.join("")
  }
  
  function decrypt(encryptedText, n) {
  
  }


//My Code Wars Solution breakdown 


  //function one for incripting 
function encrypt(text, n) {
    //we first check if our given values meet a certain condition to decide if we even continue the rest of the code or just give back the given code
    if (!text || n <= 0) return text; 


    //We start a while loop that will keep going, reducing the n value by 1 until it reaches a falsy value, in this case 0
    while (n--) {
        //every loop we establish a fresh ans variable to contain our current concat values
      let ans = '';


      //we start a for loop that will go through every odd index number by starting i by 1 and increasing it by 2 every loop
      for (let i = 1; i < text.length; i += 2) {


        //we add the value at the current index to the ans string
        ans += text[i];
      }


      //this for loop is the same as the prior one except it goes through the even number to then add to the ans string 
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }


      //we then replace the text value with the new combined value
      text = ans;
    }
    return text;
  }
  


    //this function is to reverse our prior function outcome
  function decrypt(encryptedText, n) {
    //We do same check as the start of the prior function to see if we even need to run the code any further to change the inputed encryptedText
    if (!encryptedText || n <= 0) return encryptedText;


    //this time we create an array for ans that has the number of elements equal to the length of ecryptedText string
    const ans = new Array(encryptedText.length);


    //start while loop smame rules as prior function, descent n by 1 till reaches a falsy value of 0
    while (n--) {


        //create j variable to go through the index of ecryptedText,  this recets every loop
      let j = 0;


      //we use this for loop to reorganise the odd numbers back in their place
      for (let i = 1; i < ans.length; i += 2) {
        //as we go up in the odd numbers index we add the new value to said index position on the ans array, we increase j value by one to in return go through each even number we had push at the for frunt of the str of encryptedText
        ans[i] = encryptedText[j++];
      }


      //Similar loop as prior except for the even numbers
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }


      //we join the changed array to make new string
      encryptedText = ans.join('');
    }
    
    return encryptedText;
  }


//Code Wars Solution


function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }
