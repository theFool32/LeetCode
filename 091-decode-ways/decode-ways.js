// A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
//
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
//
//
// Given a non-empty string containing only digits, determine the total number of ways to decode it.
//
// Example 1:
//
//
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
//
//
// Example 2:
//
//
// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
//



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
}
