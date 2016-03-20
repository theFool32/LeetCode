/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var result = [];
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
      var temp = [];
      for (var i = 0;i < n;++i) {
        var str = new Array(n);
        for (var j = 0;j < n;++j) {
          str[j] = (current[i] === j ? 'Q' : '.');
        }
        temp.push(str.join(''));
      }
      result.push(temp);
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
