class Solution {
public:
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        int size = s.size();
        if (!size) return true;
        vector<bool> dp(size+1, false);
        dp[0] = true;

        for (int i = 1; i <= size; ++i) {
            for (int j = i-1; j >= 0; --j) {
                if (!dp[j]) continue;
                if (wordDict.find(s.substr(j, i-j)) != wordDict.end()) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[size];
    }
};
