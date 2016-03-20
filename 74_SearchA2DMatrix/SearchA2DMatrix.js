/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var m = matrix.length, n = matrix[0].length,
      len = m * n;
  var _get = function(index) {
    var x = index % n, y = Math.floor(index / n);
    return matrix[y][x];
  };

  var low = 0, high = len - 1;
  while (low <= high) {
    var mid = ~~((low + high) / 2),
        value = _get(mid);
    if (value === target) {
      return true;
    } else if (value < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};
