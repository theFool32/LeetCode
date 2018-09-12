// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
//
//
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
//
//


class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result(numRows, vector<int>(0));
        if (numRows <= 0) return result;
        for (int i = 0;i < numRows;++i) {
            for (int j = 0;j <= i;++j) {
                if (j == 0 || j == i) {
                    result[i].push_back(1);
                    continue;
                }
                result[i].push_back(result[i-1][j-1]+result[i-1][j]);
            }
        }
        return result;
    }
};

