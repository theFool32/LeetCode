class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1) {
            return 0;
        }
        int max_profit = 0;
        auto size = prices.size();
        decltype(size) index = 1;
        while (index < size) {
            while (index<size && prices[index]<=prices[index-1]) {
                ++index;
            }
            if (index >= size) {
                return max_profit;
            }
            int min = prices[index-1];
            while (index<size && prices[index]>=prices[index-1]) {
                ++index;
            }
            if (index >= size) {
                return max_profit+prices[size-1]-min;
            }
            max_profit += prices[index-1]-min;
            ++index;
        }
        return max_profit;
    }
};
