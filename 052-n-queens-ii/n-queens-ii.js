// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
//
//
//
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.
//
// Example:
//
//
// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
//
//


/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var result = 0;
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
            ++result;
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
