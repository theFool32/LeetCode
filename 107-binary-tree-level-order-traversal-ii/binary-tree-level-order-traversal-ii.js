// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
//
//
// return its bottom-up level order traversal as:
//
// [
//   [15,7],
//   [9,20],
//   [3]
// ]
//
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  var result = []
  var queue = []
  queue.push([root, 0])
  while (queue.length) {
    var top = queue.shift()
    result[top[1]] = result[top[1]] || []
    result[top[1]].push(top[0].val)

    if (top[0].left) {
      queue.push([top[0].left, top[1]+1])
    }
    if (top[0].right) {
      queue.push([top[0].right, top[1]+1])
    }
  }
  return result.reverse()
};

