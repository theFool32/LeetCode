/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var a = 1, b = 1;
  for (var i = 1;i < n; ++i) {
    b = a + b;
    a = b - a;
  }
  return b;
};
