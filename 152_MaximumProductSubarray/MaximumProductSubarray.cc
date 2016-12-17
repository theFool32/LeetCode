class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (!nums.size()) return 0;
        int ans = nums[0];
        int _max = ans, _min = ans;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] < 0) {
                swap(_max, _min);
            }
            _max = max(nums[i], nums[i]*_max);
            _min = min(nums[i], nums[i]*_min);
            ans = max(_max, ans);
        }
        return ans;
    }
};
