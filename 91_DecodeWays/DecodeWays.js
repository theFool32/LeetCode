/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
  if (s === '' || s[0] === '0') return 0
  var pre = 0, old = 0, n = 1
  for (var i = 0;i < s.length;++i) {
    var current = ~~s[i]
    var cur = current !== 0 ? n : 0
    if (pre !== 0 && pre*10+current < 27) {
      cur += old
    }
    old = n
    n = cur
    pre = current
  }
  return n
};
