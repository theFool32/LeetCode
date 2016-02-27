/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var _is = function(_x) {
    return ((_x * _x) <= x && (_x + 1) * (_x + 1) > x);
  };

  var low = 0, high = x;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (_is(mid)) {
      return mid;
    } else if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
