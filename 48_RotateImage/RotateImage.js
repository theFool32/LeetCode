/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix === null || matrix.length <= 1) {
    return ;
  }
  var i, j, k, w, temp;
  var len = matrix.length;
  for (i = 0; i < len / 2; ++i) {
    k = len - i - 1;
    for (j = i; j < k; ++j) {
      w            = len - j - 1;
      temp         = matrix[i][j];
      matrix[i][j] = matrix[w][i];
      matrix[w][i] = matrix[k][w];
      matrix[k][w] = matrix[j][k];
      matrix[j][k] = temp;
    }
  }
};
