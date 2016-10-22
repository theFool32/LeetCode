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
