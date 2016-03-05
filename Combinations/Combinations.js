/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [],
      current = [],
      used = [];

  var _r = function(dep, len) {
    if (len >= k) {
      result.push([].concat(current));
      return ;
    }
    for (var i = dep;i <= n;++i) {
      if (!used[i]) {
        used[i] = true;
        current.push(i);
        _r(i+1, len+1);
        current.pop();
        used[i] = false;
      }
    }
  };
  _r(1, 0);
  return result;
};
