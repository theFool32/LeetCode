/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 1) {
    return x;
  } else if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / myPow(x, -n);
  } else {
    var temp = myPow(x, ~~(n / 2));
      return temp * temp * ((n & 1) ? x : 1);
  }
};
