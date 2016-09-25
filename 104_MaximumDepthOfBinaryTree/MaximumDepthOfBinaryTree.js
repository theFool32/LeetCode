/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  var queue = []
  var result = 0
  queue.push(root)
  while (queue.length) {
    ++result
    for (var i = 0, l = queue.length; i < l;++i) {
      var top = queue.shift()
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }
  }
  return result
};
