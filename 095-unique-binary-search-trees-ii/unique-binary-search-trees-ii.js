// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.
//
// Example:
//
//
// Input: 3
// Output:
// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:
//
//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return []

  var _generateTrees = function(l, h) {
    if (l > h) return [null]
    var r = []
    for (var i = l;i <= h;++i) {
      var left = _generateTrees(l, i-1)
      var right = _generateTrees(i+1, h)
      for (var j = 0;j < left.length;++j) {
        for (var k = 0;k < right.length;++k) {
          var mid = new TreeNode(i)
          mid.left = left[j]
          mid.right = right[k]
          r.push(mid)
        }
      }
    }
    return r
  }
  return _generateTrees(1, n)
};

