// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
//
//
//
// Given an integer n, return all distinct solutions to the n-queens puzzle.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
//
// Example:
//
//
// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
//
//


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var result = [];
    var current = new Array(n);
    var isOk = function(deep, pos) {
        for (var i = 0;i < deep;++i) {
            if (current[i] === pos || 
                Math.abs(deep - i) === Math.abs(pos - current[i])) {
                    return false;
            }
        }
        return true;
    };
    var place = function(deep) {
        if (deep === n) {
            var temp = [];
            for (var i = 0;i < n;++i) {
                var str = new Array(n);
                for (var j = 0;j < n;++j) {
                    str[j] = (current[i] === j ? 'Q' : '.');
                }
                temp.push(str.join(''));
            }
            result.push(temp);
            return ;
        }
        for (var i = 0;i < n;++i) {
            if (isOk(deep, i)) {
                current[deep] = i;
                place(deep + 1);
            }
        }
    };
    
    place(0);
    return result;
};
