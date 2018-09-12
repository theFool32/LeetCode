// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
//
// Example:
//
//
// Input: 
//
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// Output: 4
//
//


class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        int m = matrix.size();
        if (m == 0) return 0;
        int n = matrix[0].size();

        vector<vector<int> > p(m, vector<int>(n,0));
        int res = 0;
        for (int i = 0; i < n; ++i) {
            p[0][i] = matrix[0][i] - '0';
            res = max(res, p[0][i]);
        }
        for (int i = 1; i < m; ++i) {
            p[i][0] = matrix[i][0] - '0';
            res = max(res, p[i][0]);
        }
        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                if (matrix[i][j] == '1') {
                    p[i][j] = min(min(p[i-1][j], p[i-1][j-1]), p[i][j-1])+1;
                    res = max(res, p[i][j]);
                }
            }
        }
        return res*res;
    }
};

