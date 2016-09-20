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
var isValidBST = function(root) {
  if (!root) return true
  if (!isValidBST(root.left) || !isValidBST(root.right)) return false
  var max = root.left || new TreeNode(-Number.MAX_VALUE)
  while (max.right) max = max.right
  var min = root.right || new TreeNode(Number.MAX_VALUE)
  while (min.left) min = min.left
  if (root.val > max.val && root.val < min.val) return true
  return false
};
