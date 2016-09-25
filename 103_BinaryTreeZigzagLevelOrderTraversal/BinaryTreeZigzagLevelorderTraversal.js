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
var zigzagLevelOrder = function(root) {
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
  for (var i = 1;i < result.length;i += 2) {
    result[i].reverse()
  }
  return result
};
