/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
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
            if (r[i][temp] || c[temp][j] || 
                    b[~~(j/3)+~~(i/3)*3][temp]) {
                return false;
            }
            r[i][temp] = c[temp][j] = b[~~(j/3)+~~(i/3)*3][temp] = true;
        }
    }
    return true;
};
