//As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

//For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

//For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

//If there are less or more than two occurrences of the number to search for, return 0.


// My Solution

var lengthOfSequence = function (arr, n) {
  return arr.filter(el => el === n).length > 1 && arr.filter(el => el === n).length < 3 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0
};


// Code Wars Alternatives

function lengthOfSequence(arr, n){
  return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
}

Array.prototype.count = function(n){
  return this.filter(function(v){ return v == n }).length;
}

// Or

var lengthOfSequence = function (arr, n) {
  // TODO: Write some scripts here
  var index1 = arr.indexOf(n);
  var index2 = arr.indexOf(n,index1 + 1);
  var index3 = arr.indexOf(n,index2 + 1);
  if (index1 == -1 || index2 == -1 || index3 != -1) {return 0} ;
  return index2 - index1 + 1;
};