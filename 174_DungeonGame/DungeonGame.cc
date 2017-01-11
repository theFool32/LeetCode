class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& dungeon) {
        int m = dungeon.size();
        int n = dungeon[0].size();
        vector<vector<int>> ans(m, vector<int>(n, 0));
        ans[m-1][n-1] = -dungeon[m-1][n-1] + 1;
        for (int i = n-2; i >= 0; --i) {
            ans[m-1][i] = max(-dungeon[m-1][i] + ans[m-1][i+1], -dungeon[m-1][i]+1);
        }
        for (int i = m-2; i >= 0; --i) {
            ans[i][n-1] = max(-dungeon[i][n-1] + ans[i+1][n-1], -dungeon[i][n-1]+1);
        }
        for (int i = m-2; i >= 0; --i) {
            for (int j = n-2; j >= 0; --j) {
                ans[i][j] = max(-dungeon[i][j] + min(ans[i+1][j], ans[i][j+1]), 
                        -dungeon[i][j]+1);
            }
        }
        return max(ans[0][0], 1);
    }
};
