// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
//
// Example 1:
//
//
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
//
//
// Example 2:
//
//
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
//
//


/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false

  var dp = {}
  var _isInterleave = function(s1, s2, s3) {
    if (s1.length === 0) return s2 === s3
    if (s2.length === 0) return s1 === s3
    var key = s1.length + '_' + s2.length
    if (dp[key] !== undefined) return dp[key]
    dp[key] = (s1[0] === s3[0] && _isInterleave(s1.substr(1), s2, s3.substr(1))) ||
           (s2[0] === s3[0] && _isInterleave(s1, s2.substr(1), s3.substr(1)))
    return dp[key]
  }
  return _isInterleave(s1, s2, s3)
};

