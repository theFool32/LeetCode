class Solution {
public:
    vector<vector<int> > res;
    vector<int> current;
    int sum(vector<int> c) {
        int s = 0;
        for (auto &n : c) s += n;
        return s;
    }
    void dfs(int i, int k, int n) {
        if (i > 9 || current.size() == k) {
            if (current.size() !=k) return;
            if (sum(current) == n) res.push_back(current);
            return;
        }
        if (sum(current) >= n) return;
        for (int j = i;j <= 9;++j) {
            current.push_back(j);
            dfs(j+1, k, n);
            current.pop_back();
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        dfs(1, k, n);
        return res;
    }
};

