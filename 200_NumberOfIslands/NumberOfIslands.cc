class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int ans = 0;
        int m = grid.size(); 
        if (m == 0) return ans;
        int n = grid[0].size();
        function<void(int,int)> change = [&](int i, int j)-> void {
            if (i >= 0 && i < m && j >=0 && j < n && grid[i][j] == '1') {
                grid[i][j] = '0';
                change(i-1,j);
                change(i+1,j);
                change(i,j-1);
                change(i,j+1);
            }
        };
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == '1') {
                    ++ans;
                    change(i, j);
                }
            }
        }
        return ans;
    }
};

