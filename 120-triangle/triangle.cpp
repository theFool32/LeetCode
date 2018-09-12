// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
//
// For example, given the following triangle
//
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
//
//
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
//
// Note:
//
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
//


class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int row = 0;
        int col = 0;
        int current = 0;
        vector<int> Min(triangle.size()+1, 0);
        for (row = triangle.size()-1; row >= 0;--row) {
            for (col = 0; col <= row; ++col) {
                current = triangle[row][col];
                Min[col] = std::min(Min[col], Min[col+1]) + current;
            }
        }
        return Min[0];
    }
};

