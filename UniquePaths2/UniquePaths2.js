/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length,
  n = obstacleGrid[0].length;
  var getPaths = function(i, j) {
    if (obstacleGrid[i][j]) {
      return 0;
    }
    var p1, p2;
    if (i - 1 < 0 || obstacleGrid[i-1][j]) {
      p1 = 0;
    } else {
      p1 = paths[i-1][j];
    }


    if (j - 1 < 0 || obstacleGrid[i][j-1]) {
      p2 = 0;
    } else {
      p2 = paths[i][j-1];
    }
    return p1 + p2;
  };

  var paths = new Array(m);
  for (var i = 0;i < m;++i) {
    paths[i] = new Array(n);
  }
  paths[0][0] = 1 - obstacleGrid[0][0];
  for (i = 1;i < n;++i) {
    paths[0][i] = getPaths(0, i);
  }
  for (i = 1;i < m;++i) {
    paths[i][0] = getPaths(i, 0);
  }
  var j;
  for (i = 1;i < m;++i) {
    for (j = 1;j < n;++j) {
      paths[i][j] = getPaths(i,j);
    }
  }
  return paths[m-1][n-1];
};
