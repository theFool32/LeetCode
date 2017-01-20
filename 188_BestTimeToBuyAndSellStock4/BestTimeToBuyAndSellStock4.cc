//https://discuss.leetcode.com/topic/8984/a-concise-dp-solution-in-java
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        int len = prices.size();
        if (k > len/2) {
            int ans = 0;
            for (int i = 1; i < len; ++i) {
                ans += max(0, prices[i]-prices[i-1]);
            }
            return ans;
        }

        vector<vector<int>> dp(k+1, vector<int>(len, 0));
        for (int i = 1; i <= k; ++i) {
            int tmpMax = -prices[0];
            for (int j = 1; j < len; ++j) {
                dp[i][j] = max(dp[i][j-1], prices[j]+tmpMax);
                tmpMax = max(tmpMax, dp[i-1][j-1] - prices[j]);
            }
        }
        return dp[k][len-1];
    }
};
