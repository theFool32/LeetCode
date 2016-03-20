/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var len1 = word1.length, 
      len2 = word2.length,
      dp = new Array(len1 + 1);
  for (var i = 0;i < len1 + 1; ++i) {
    dp[i] = new Array(len2 + 1);
    dp[i][0] = i;
  }
  for (i = 0;i < len2 + 1;++i) {
    dp[0][i] = i;
  }
  var j;
  for (i = 1;i < len1 + 1; ++i) {
    for (j = 1;j < len2 + 1; ++j) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1;
      }
    }
  }
  return dp[len1][len2];
};
