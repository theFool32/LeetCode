class Solution {
public:
    int findMin(vector<int>& nums) {
        int len = nums.size();
        if (len == 0) return 0;
        if (len == 1) return nums[0];
        if (len == 2) return min(nums[0], nums[1]);
        if (nums[0] < nums[len-1]) return nums[0];
        int mid = (len-1) / 2;
        if (nums[0] < nums[mid]) {
            vector<int> temp(nums.begin()+mid, nums.end());
            return findMin(temp);
        }
        vector<int> temp(nums.begin(), nums.begin()+mid+1);
        return findMin(temp);
    }
};
