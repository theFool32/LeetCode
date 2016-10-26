class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() == 0) {
            return 0;
        }
        int minVal = prices[0];
        int best_profit = 0;
        for (auto price : prices) {
            best_profit = std::max(best_profit, price - minVal);
            minVal = std::min(minVal, price);
        }
        return best_profit;
    }
};
