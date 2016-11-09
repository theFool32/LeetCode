class Solution {
public:
    int minCut(string s) {
        int size = s.size();
        vector<int> min_cut(size+1, 0);
        for (int i = 0; i <= size; ++i) {
            min_cut[i] = i-1;
        }
        for (int i = 0; i < size; ++i) {
            for (int j = 0; i-j>=0&&i+j<size&&s[i-j]==s[i+j] ; ++j) {
                min_cut[i+j+1] = min(min_cut[i+j+1], min_cut[i-j]+1);
            }
            for (int j = 0; i-j+1>=0&&i+j<size&&s[i-j+1]==s[i+j] ; ++j) {
                min_cut[i+j+1] = min(min_cut[i+j+1], min_cut[i-j+1]+1);
            }
        }
        return min_cut[size];
    }
};
