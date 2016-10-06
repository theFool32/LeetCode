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
