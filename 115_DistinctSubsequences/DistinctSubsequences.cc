class Solution {
public:
    int numDistinct(string s, string t) {
        int sl = s.length(), tl = t.length();
        vector<int> dp(tl+1,0);
        dp[0] = 1;
        for (int i = 1; i<=sl; ++i) {
            int pre = 1;
            for (int j = 1; j<=tl;++j) {
                int temp = dp[j];
                if (s[i-1] == t[j-1]) {
                    dp[j] += pre;
                }
                pre = temp;
            }
        }
        return dp[tl];
    }
};
