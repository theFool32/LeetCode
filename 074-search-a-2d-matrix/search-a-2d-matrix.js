// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//
// 	Integers in each row are sorted from left to right.
// 	The first integer of each row is greater than the last integer of the previous row.
//
//
// Example 1:
//
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
//
//
// Example 2:
//
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false
//


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length, n = matrix[0].length,
        len = m * n;
    var _get = function(index) {
        var x = index % n, y = Math.floor(index / n);
        return matrix[y][x];
    };
    
    var low = 0, high = len - 1;
    while (low <= high) {
        var mid = ~~((low + high) / 2),
            value = _get(mid);
        if (value === target) {
            return true;
        } else if (value < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};
