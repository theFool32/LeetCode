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
