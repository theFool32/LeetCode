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
var isSymmetric = function(root) {
  if (!root) return true
  var _isSymmetric = function(l, r) {
    if (!l || !r) {
      return l == r
    }
    if (l.val !== r.val) return false
    return _isSymmetric(l.left, r.right) && _isSymmetric(l.right, r.left)
  }

  return _isSymmetric(root.left, root.right)
};
