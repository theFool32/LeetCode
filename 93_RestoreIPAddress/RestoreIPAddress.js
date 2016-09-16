/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var result = []
  var cur = []
  var func = function(s, count) {
    if (s.length >= count) {
      var substr = s.substr(0, count)
      if ((substr.length > 1 && substr[0] === '0') || ~~substr > 255) {
        return
      }
      cur.push(substr)
      backtrack(s.substr(count))
      cur.pop()
    }
  }
  var backtrack = function(s) {
    if (cur.length === 4) {
      if (s.length === 0) {
        result.push(cur.join('.'))
      }
      return
    }
    func(s,1)
    func(s,2)
    func(s,3)
  }
  backtrack(s)
  return result
};
