// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// Example:
//
//
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
//
//


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length,
        n = board[0].length,
        len = word.length;
    if (len <= 0) {
        return false;
    }
    var isVisit = new Array(m * n);
    var search = function(i, j, index) {
        if (i < 0 || i >= m || j < 0 || j >= n || isVisit[i*n+j] ||
            board[i][j] !== word[index]) {
            return false;
        }
        if (index === len - 1) {
            return true;
        }
        isVisit[i*n+j] = true;
        var r = search(i-1, j, index+1) || search(i+1, j, index+1) || search(i, j-1, index+1) || search(i, j+1, index+1);
        isVisit[i*n+j] = false;
        return r;
    };
    for (var i = 0;i < m;++i) {
        for (var j = 0;j < n;++j) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
