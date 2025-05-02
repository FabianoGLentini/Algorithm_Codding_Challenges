/*
"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before  1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before  9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
Error Checking

A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.
*/

// My Solution

/*  Psuedo

    Plan:
    - Check if number is valid
    - Create a arr out of the input num and arr of all num in phrase
    - Create function that check if num is Int
    - if statement using ck function to see if num int or if num + 2 is int or not


*/

function isInteresting(num, awPh) {  
  
  function dig(val){
    return String(val).split("")
  }
  
  function ckInt(arr){
    if(arr.join("") <= 99) return false
    
    if(arr.every((el,i) => i == 0 || i !== 0 && el == 0)) return true
    if(arr.every((el,_,a)=> el === a[0])) return true
    
    //Incremental ck
    if(arr.every((el,i,a) => Number(a[i+1]) >= 0 ? el == Number(a[i+1]) - 1 || el == 9 && Number(a[i+1]) - 1 == -1 : true)) return true
    
    //Decremeental ck
    if(arr.every((el,i,a) => Number(a[i+1]) >= 0 ? el == Number(a[i+1]) + 1 : true)) return true
    if(arr.slice(0,arr.length/2).join("") == arr.slice(arr.length/2 + 1).reverse().join("")) return true
    if(awPh.some(el => el == arr.join(""))) return true

    return false 
  }
  
  return ckInt(dig(num)) ? 2 : ckInt(dig(num + 1)) || ckInt(dig(num + 2)) ? 1 : 0
}


// Code Wars Alternatives

function isInteresting(number, awesomePhrases, recurse = false) {
  // Go to town!
  nstr = number.toString()
  asc = "1234567890"
  des = "9876543210"
  
  // if digit followed by zeros
  if (nstr.search(/^[1-9]0{2,}$/) == 0) { return 2; }
  // if it's all the same digit
  if (nstr.search(/^([1-9])\1{2,}$/) == 0) { return 2; }
  // if the digits are ascending sequential
  if (asc.search(nstr) != -1 && nstr.length > 2) { return 2; }
  // if digits are descending sequential
  if (des.search(nstr) != -1 && nstr.length > 2) { return 2; }
  // if palindrome
  if (nstr == nstr.split("").reverse().join("") && nstr.length > 2) { return 2; }
  
  for (var i = 0; i < awesomePhrases.length; i++) {
    if (nstr == awesomePhrases[i]) { return 2; }
  }
  
  // check for the cases where it could be within two
  if (recurse == true) { return 0; }
  if (isInteresting(number + 1, awesomePhrases, true) == 2) { return 1; }
  if (isInteresting(number + 2, awesomePhrases, true) == 2) { return 1; }
  return 0;
}

 // Or
 
 function isInteresting(number, awesomePhrases) {
  var tests = [
    function(n) { return /^\d00+$/.test(n); },
    function(n) { return /^(\d)\1+$/.test(n); },
    function(n) { return RegExp(n).test(1234567890); },
    function(n) { return RegExp(n).test(9876543210); },
    function(n) { return n + '' == (n + '').split('').reverse().join(''); },
    function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
  ];
  
  var interesting = 0;
  tests.some(function(test) {
    if (number > 99 && test(number))
      return interesting = 2;
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
      interesting = 1;
  });
  return interesting;
}

