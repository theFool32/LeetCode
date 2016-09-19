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
