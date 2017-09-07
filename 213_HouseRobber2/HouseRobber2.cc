class Solution {
public:
    //copy from HouseRobber
    int rob1(vector<int>& nums, int begin, int end) {
        int n = 0, y = 0;
        for (int i = begin;i < end;++i) {
            int num = nums[i];
            int t = n;
            n = max(n, y);
            y = num + t;
        }
        return max(n,y);
    }

    int rob(vector<int>& nums) {
        int size = nums.size();
        if (size == 0) return 0;
        if (size == 1) return nums[0];
        return max(rob1(nums, 0, size-1), rob1(nums, 1, size));
    }
};
