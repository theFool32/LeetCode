// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// return its minimum depth = 2.
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  var queue = []
  var result = 0
  queue.push(root)
  while (queue.length) {
    ++result
    for (var i = 0, l = queue.length; i < l;++i) {
      var top = queue.shift()
      if (!top.left && !top.right) return result
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }
  }
  return result
};

