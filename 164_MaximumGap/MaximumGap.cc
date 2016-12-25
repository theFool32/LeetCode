class Solution {
public:
    int maximumGap(vector<int>& nums) {
        int len = nums.size();
        if (len < 2) return 0;
        int maxNumber = 10;
        int maxDigit = 1;
        for (int num : nums) {
            while (num >= maxNumber) {
                maxNumber *= 10;
                ++maxDigit;
            }
        }

        for (int i = 1; i < maxNumber; i*=10) {
            vector<int> tmp(nums.begin(), nums.end());
            vector<int> bucket(10, 0);
            for (int num : nums) {
                ++bucket[(num/i) % 10];
            }
            for (int j = 1; j < 10; ++j) {
                bucket[j] += bucket[j-1];
            }
            for (int j = len-1; j >= 0; --j) {
                nums[--bucket[(tmp[j]/i)%10]] = tmp[j];
            }
        }

        int ans = 0;
        for (int i = 1; i < len; ++i) {
            ans = max(abs(nums[i]-nums[i-1]), ans);
        }
        return ans;
    }
};
