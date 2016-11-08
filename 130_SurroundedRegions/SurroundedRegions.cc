class Solution {
public:
    void bfs(vector<vector<char>>& board, int h, int w) {
        int height = board.size();
        int width = board[0].size();
        queue<pair<int,int>> q;
        q.push(make_pair(h,w));
        board[h][w] = 't';
#define SAVE(i,j) (i>=0 && i<height && j>=0 && j<width)
        while (!q.empty()) {
            auto p = q.front();
            q.pop();
            int i = p.first, j = p.second;
            if (SAVE(i-1,j) && board[i-1][j]=='O') {
                board[i-1][j] = 't';
                q.push(make_pair(i-1,j));
            }
            if (SAVE(i+1,j) && board[i+1][j]=='O') {
                board[i+1][j] = 't';
                q.push(make_pair(i+1,j));
            }
            if (SAVE(i,j-1) && board[i][j-1]=='O') {
                board[i][j-1] = 't';
                q.push(make_pair(i,j-1));
            }
            if (SAVE(i,j+1) && board[i][j+1]=='O') {
                board[i][j+1] = 't';
                q.push(make_pair(i,j+1));
            }
        }
    }

    void solve(vector<vector<char>>& board) {
        int height = board.size();
        if (height <= 2) return;
        int width = board[0].size();
        if (width <= 2) return;

        for (int i = 0; i < width; ++i) {
            if (board[0][i] == 'O') {
                bfs(board, 0, i);
            }
            if (board[height-1][i] == 'O') {
                bfs(board, height-1, i);
            }
        }
        for (int i = 1; i < height-1; ++i) {
            if (board[i][0] == 'O') {
                bfs(board, i, 0);
            }
            if (board[i][width-1] == 'O') {
                bfs(board, i, width-1);
            }
        }

        for (int i = 0; i < height; ++i) {
            for (int j = 0; j < width; ++j) {
                if (board[i][j] == 't') {
                    board[i][j] = 'O';
                } else if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
            }
        }
    }
};
