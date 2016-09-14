/**
 * @param {number} n
 * @return {number[]}
 */

var grayCode = function(n) {
  var showup = new Array(1 << n)
  var result = [0]
  showup[0] = 1
  var current = 0
  while (result.length < (1 << n)) {
    for (var i = 0;i < n;++i) {
      var mask = 1 << i
      var new_value = current ^ mask
      if (!showup[new_value]) {
        result.push(new_value)
        showup[new_value] = 1
        current = new_value
        break
      }
    }
  }
  return result
};
