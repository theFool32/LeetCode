/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var dir = 2; //0: left, 1: up, 2: right: 3: down
  var m = matrix.length,
      n = (matrix[0] || []).length;
  var mark = new Array(m * n);
  var result = new Array(m * n);
  var y = 0, x = 0;
  var index = 0;
  var next = function() {
    var newX, newY;
    while (true) {
      newX = x, newY = y;
      switch (dir) {
        case 0: newX = x - 1; break;
        case 1: newY = y - 1; break;
        case 2: newX = x + 1; break;
        case 3: newY = y + 1; break;
        default: break;
      }
      if (newX < 0 || newX >= n || newY < 0 || newY >= m || 
          mark[newY * n + newX]) {
        dir = (dir + 1) % 4;
      } else {
        break;
      }
    }
    x = newX;
    y = newY;
  };

  while (index < m * n) {
    result[index] = matrix[y][x];
    mark[y * n + x] = true;
    if (index !== m*n-1) {
      next();
    }
    ++index;
  }

  return result;
};
