/**
 * AC from
 * https://leetcode.com/discuss/65654/python-solutioin-120ms-based-largest-rectangle-histogram
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix || !matrix[0]) {
    return 0;
  }
  var n = matrix[0].length;
  var height = new Array(n+1);
  for (var i = 0;i < n+1;++i) {
    height[i] = 0;
  }
  var ans = 0;
  for (i = 0;i < matrix.length;++i) {
    for (var j = 0;j < n;++j) {
      height[j] = matrix[i][j] === '1' ? height[j]+1 : 0;
    }
    var stack = [-1];
    for (j = 0;j < n+1; ++j) {
      while (height[j] < height[ stack[stack.length-1] + 
              (stack[stack.length-1] >= 0 ? 0 : height.length) ]) {
        var h = height[stack.pop()];
        var w = j - 1 - stack[stack.length-1];
        ans = Math.max(ans, h * w);
      }
      stack.push(j);
    }
  }
  return ans;
};

