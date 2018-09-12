// Two elements of a binary search tree (BST) are swapped by mistake.
//
// Recover the tree without changing its structure.
//
// Example 1:
//
//
// Input: [1,3,null,null,2]
//
//    1
//   /
//  3
//   \
//    2
//
// Output: [3,1,null,null,2]
//
//    3
//   /
//  1
//   \
//    2
//
//
// Example 2:
//
//
// Input: [3,1,4,null,null,2]
//
//   3
//  / \
// 1   4
//    /
//   2
//
// Output: [2,1,4,null,null,3]
//
//   2
//  / \
// 1   4
//    /
//   3
//
//
// Follow up:
//
//
// 	A solution using O(n) space is pretty straight forward.
// 	Could you devise a constant space solution?
//
//


//https://discuss.leetcode.com/topic/29161/share-my-solutions-and-detailed-explanation-with-recursive-iterative-in-order-traversal-and-morris-traversal/2
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  var first = null
  var second = null

  var pred = null
  var prev = null

  var curr = root

  while (curr) {
    if (prev && curr.val <= prev.val) {
      first = first || prev
      second = curr
    }

    if (curr.left) {
      pred = curr.left
      while (pred.right && pred.right !== curr) {
        pred = pred.right
      }
      if (pred.right === curr) {
        pred.right = null
        prev = curr
        curr = curr.right
      } else {
        pred.right = curr
        curr = curr.left
      }
    } else {
      prev = curr
      curr = curr.right
    }
  }

  var temp = first.val
  first.val = second.val
  second.val = temp
};

