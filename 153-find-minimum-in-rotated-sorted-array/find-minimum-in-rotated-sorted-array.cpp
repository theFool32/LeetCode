// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.
//
// Example 1:
//
//
// Input: [3,4,5,1,2] 
// Output: 1
//
//
// Example 2:
//
//
// Input: [4,5,6,7,0,1,2]
// Output: 0
//
//


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

