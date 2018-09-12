// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete at most k transactions.
//
// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
//
// Example 1:
//
//
// Input: [2,4,1], k = 2
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
//
//
// Example 2:
//
//
// Input: [3,2,6,5,0,3], k = 2
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
//              Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//
//


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

