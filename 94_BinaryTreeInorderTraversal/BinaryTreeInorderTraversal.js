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
