class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int len = nums.size();
        k %= len;
        reverse(nums.begin(), nums.begin()+len-k);
        reverse(nums.begin()+len-k, nums.end());
        reverse(nums.begin(), nums.end());
    }
};
