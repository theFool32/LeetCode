// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
//
// Example 1:
//
//
// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
//
//
// Example 2:
//
//
// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
//
//
// Follow up:
//
//
// 	A straight forward solution using O(mn) space is probably a bad idea.
// 	A simple improvement uses O(m + n) space, but still not the best solution.
// 	Could you devise a constant space solution?
//
//


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
     var row = false, col = false;
     var m = matrix.length, n = matrix[0].length;
     var i, j;
        for(i = 0; i < m; ++i){
            for(j = 0; j < n; ++j){
                if(matrix[i][j] === 0) {
                    if(i === 0) {
                        row = true;
                    }
                    if(j === 0){
                      col = true;  
                    } 
                    matrix[0][j] = matrix[i][0] = 0;
                }
            }
        }
        for(i = 1; i < m; i++){
            for(j = 1; j < n; j++){
                if(matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
            }
        }
        if(col){
            for(i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
        if(row){
            for(j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
};
