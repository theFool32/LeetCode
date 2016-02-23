/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var m = grid.length,
  n = grid[0].length;

  var paths = new Array(m);
  for (var i = 0;i < m;++i) {
    paths[i] = new Array(n);
  }
  paths[0][0] = grid[0][0];
  for (i = 1;i < n;++i) {
    paths[0][i] = grid[0][i] + paths[0][i - 1];
  }
  for (i = 1;i < m;++i) {
    paths[i][0] = grid[i][0] + paths[i-1][0];
  }
  var j;
  for (i = 1;i < m;++i) {
    for (j = 1;j < n;++j) {
      paths[i][j] = Math.min(paths[i-1][j], paths[i][j-1]) + grid[i][j];
    }
  }
  return paths[m-1][n-1];
};
