// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
// Example 1:
//
//
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
//
//
// Example 2:
//
//
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
//


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

