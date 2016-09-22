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
