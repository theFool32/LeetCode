/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var paths = new Array(m);
  for (var i = 0;i < m;++i) {
    paths[i] = new Array(n);
  }
  for (i = 0;i < n;++i) {
    paths[0][i] = 1;
  }
  for (i = 1;i < m;++i) {
    paths[i][0] = 1;
  }
  var j;
  for (i = 1;i < m;++i) {
    for (j = 1;j < n;++j) {
      paths[i][j] = paths[i-1][j] + paths[i][j-1];
    }
  }
  return paths[m-1][n-1];
};
