/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  var index = ~~(nums.length/2)
  var root = new TreeNode(nums[index])
  root.left = sortedArrayToBST(nums.slice(0, index))
  root.right = sortedArrayToBST(nums.slice(index+1))
  return root
};
