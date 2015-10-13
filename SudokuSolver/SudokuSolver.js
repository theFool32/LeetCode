/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var r = new Array(9),
        c = new Array(9),
        b = new Array(9);
    var i, j;
    for (i = 0;i < 9;++i) {
        r[i] = new Array(9);
        c[i] = new Array(9);
        b[i] = new Array(9);
    }

    for (i = 0;i < 9;++i) {
        for (j = 0;j < 9;++j) {
            if (board[i][j] === '.') {
                continue;
            }
            var temp = +board[i][j] - 1;
            r[i][temp] = c[temp][j] = b[~~(j/3)+~~(i/3)*3][temp] = true;
        }
    }

    var dfs = function(d) {
        if (d >= 81) {
            return true;
        }
        var i = ~~(d / 9), j = d % 9;
        if (board[i][j] !== '.') {
            return dfs(d + 1);
        }

        for (var k = 0;k < 9;++k) {
            if (! (r[i][k] || c[k][j] || b[~~(j/3)+~~(i/3)*3][k])) {
                board[i][j] = String(k + 1);
                r[i][k] = c[k][j] = b[~~(j/3)+~~(i/3)*3][k] = true;
                if (dfs(d + 1)) {
                    return true;
                }
                board[i][j] = '.';
                r[i][k] = c[k][j] = b[~~(j/3)+~~(i/3)*3][k] = false;
            }
        }

        return false;
    };

    dfs(0);
};
