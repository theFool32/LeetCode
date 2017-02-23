class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int start = 0, current = 0, sum = 0, ans = INT_MAX;
        while (current < nums.size()) {
            sum += nums[current++];

            while (sum >= s) {
                ans = min(ans, current-start);
                sum -= nums[start++];
            }
        }
        return ans==INT_MAX ? 0 : ans;
    }
};
