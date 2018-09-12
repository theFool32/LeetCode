// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
//
//
// Example 2:
//
//
// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3
//
//


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


