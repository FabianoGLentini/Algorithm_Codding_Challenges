// Given a node object representing a binary tree:

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

// Examples:

// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3

//Solution breackdown

function sumTheTreeValues(root) {
    //!root check if it is a truthy value or not so if we end up having null or an empty obj we will return zeroa and go back up our code. Essentially the first time the function runs it shouldent be falsy. since this is a data tree we can start with root.value to get our first value and then we can go and find thje other values to add by repeating the function for each tree and adding them to the original root value.
    return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
  }

  //or

  function sumTheTreeValues(root){
    var sum = root.value;
    if (root.left) {
      sum += sumTheTreeValues(root.left);
    }
    if (root.right) {
      sum += sumTheTreeValues(root.right);
    }
    return sum;
  }

