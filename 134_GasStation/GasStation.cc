class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        for (int i = 0; i < gas.size(); ++i) {
            gas[i] -= cost[i];
        }
        int ans = 0;
        int sum = 0;
        for (int i = 0; i < gas.size()*2-1; ++i) {
            sum += gas[i % gas.size()];
            if (sum < 0) {
                ans = i + 1;
                if (ans >= gas.size()) {
                    return -1;
                }
                sum = 0;
            }
        }
        return ans;
    }
};
