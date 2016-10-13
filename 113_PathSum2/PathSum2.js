/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []

  if (root.left===root.right) {
    if (root.val === sum) {
      return [[root.val]]
    }
    return []
  }

  return pathSum(root.left, sum-root.val)
    .concat(pathSum(root.right, sum-root.val))
    .map(function(v) {
      v.unshift(root.val) 
      return v
    })
};
