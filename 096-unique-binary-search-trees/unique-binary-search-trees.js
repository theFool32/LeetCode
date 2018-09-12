// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
//
// Example:
//
//
// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:
//
//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
//
//


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var result = new Array(n)
  var _numTrees = function(l, n) {
    var del = n - l
    if (del <= 0) return 1
    if (result[del] !== undefined) return result[del]
    var sum = 0
    for (var i = l;i <= n;++i) {
      var left = _numTrees(l, i-1)
      var right = _numTrees(i+1, n)
      sum += left*right
    }
    result[del] = sum
    return sum
  }
  return _numTrees(1, n)
};

