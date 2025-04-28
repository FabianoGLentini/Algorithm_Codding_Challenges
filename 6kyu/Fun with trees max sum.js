/*
You are given a binary tree. Implement a function that returns the maximum sum of a route from root to leaf.

For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13
The function should return 23, since 17 -> -10 -> 16 is the route from root to leaf with the maximum sum.

Return 0 if the tree is empty.

Please note that you are not to find the best possible route in the tree, but the best possible route from root to leaf, e.g. for the following tree, you cannot skip the leaves and return 5 + 10 = 15: the expected answer is 5 + 4 + -60 = -51

        5
      /   \
    4      10
   / \     /
-80 -60 -90
A tree node type is preloaded for you:

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
*/

// My JS Solution 
function maxSum(root) {
    if(root == null) return 0
    
    const opt = []
    
    const traverse = (node, acc) => {
      acc += node.value
      
      if(node.left) {
        traverse(node.left, acc)
      } else if (node.right){
        traverse(node.right, acc)
      } else{
        opt.push(acc)
      }
      
      if(node.right) traverse(node.right, acc)
    }
    
    traverse(root, 0);
    
    return Math.max(... opt)
    } 

// Code Wars Alternatives
function maxSum(root) {
    if (!root) return 0
    
    let {value, left, right} = root
    
    if (!right) {
      return value + maxSum(left)
    }
    
    if (!left) {
      return value + maxSum(right)
    }
    
    return value + Math.max(maxSum(left), maxSum(right))
  }

// Chat Gbt-4 Recommendations
function maxSum(root) {
    if (!root) return 0;
  
    const traverse = (node, acc) => {
      // Base case: If node is a leaf, return the accumulated sum
      if (!node.left && !node.right) {
        return acc + node.value;
      }
  
      // Recursively calculate sums for left and right subtrees
      const leftSum = node.left ? traverse(node.left, acc + node.value) : 0;
      const rightSum = node.right ? traverse(node.right, acc + node.value) : 0;
  
      // Return the maximum sum from either subtree
      return Math.max(leftSum, rightSum);
    };
  
    return traverse(root, 0);
  }
  