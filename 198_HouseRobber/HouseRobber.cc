class Solution {
public:
    int rob(vector<int>& nums) {
        int n = 0, y = 0;
        for (auto&& num : nums) {
            int t = n;
            n = max(n, y);
            y = num + t;
        }
        return max(n,y);
    }
};
