// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]
//
// Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return []
  var stack = []
  var result = []
  stack.push(root)
  while (stack.length) {
    var top = stack.pop()
    if (top.val === undefined) {
      result.push(top)
    } else {
      if (top.right) {
        stack.push(top.right)
      }
      stack.push(top.val)
      if (top.left) {
        stack.push(top.left)
      }
    }
  }
  return result
};

