/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var result = new Array(n);
  for (var i = 0;i < n;++i) {
    result[i] = new Array(n);
  }
  i = 1;
  var x = 0, y = 0, dir = 0;
  var nextPos = function(x, y) {
    while (true) {
      var newX = x, newY = y;
      switch (dir) {
        case 0: //right
          ++newX; break;
        case 1: //down
          ++newY; break;
        case 2: //left
          --newX; break;
        case 3: //up
          --newY; break;
      }
      if (newX < 0 || newX >= n || newY < 0 || newY >= n || result[newY][newX]) {
        dir = (dir + 1) % 4;
      } else {
        return [newX, newY];
      }
    }
  };
  while (i <= n * n) {
    result[y][x] = i;
    if (i < n * n) {
      var pos = nextPos(x, y);
      x = pos[0];
      y = pos[1];
    }
    ++i;
  }
  return result;
};
