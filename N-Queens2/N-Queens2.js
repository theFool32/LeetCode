/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var result = 0;
  var current = new Array(n);
  var isOk = function(deep, pos) {
    for (var i = 0;i < deep;++i) {
      if (current[i] === pos || 
          Math.abs(deep - i) === Math.abs(pos - current[i])) {
        return false;
      }
    }
    return true;
  };
  var place = function(deep) {
    if (deep === n) {
      ++result;
      return ;
    }
    for (var i = 0;i < n;++i) {
      if (isOk(deep, i)) {
        current[deep] = i;
        place(deep + 1);
      }
    }
  };

  place(0);
  return result;
};
