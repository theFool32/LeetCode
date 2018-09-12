// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as:
//
//
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
//
// Example 1:
//
// Given the following tree [3,9,20,null,null,15,7]:
//
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// Return true.
//
// Example 2:
//
// Given the following tree [1,2,2,3,3,null,null,4,4]:
//
//
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
//
//
// Return false.
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  var getHeight = function(root) {
    if (!root) {
      return 0
    }
    var left_height = getHeight(root.left)
    if (left_height === -1) {
      return -1
    }
    var right_height = getHeight(root.right)
    if (right_height === -1) {
      return -1
    }
    if (Math.abs(left_height-right_height) > 1) {
      return -1
    }
    return Math.max(left_height, right_height) + 1
  }
  return getHeight(root) !== -1
};

