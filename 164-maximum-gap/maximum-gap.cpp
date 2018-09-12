// Given an unsorted array, find the maximum difference between the successive elements in its sorted form.
//
// Return 0 if the array contains less than 2 elements.
//
// Example 1:
//
//
// Input: [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either
//              (3,6) or (6,9) has the maximum difference 3.
//
// Example 2:
//
//
// Input: [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
//
// Note:
//
//
// 	You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
// 	Try to solve it in linear time/space.
//
//


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

