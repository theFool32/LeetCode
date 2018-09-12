// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// The array may contain duplicates.
//
// Example 1:
//
//
// Input: [1,3,5]
// Output: 1
//
// Example 2:
//
//
// Input: [2,2,2,0,1]
// Output: 0
//
// Note:
//
//
// 	This is a follow up problem to Find Minimum in Rotated Sorted Array.
// 	Would allow duplicates affect the run-time complexity? How and why?
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
        if (nums[0] > nums[len-1]) {
            if (nums[0] <= nums[mid]) {
                vector<int> temp(nums.begin()+mid, nums.end());
                return findMin(temp);
            }
            vector<int> temp(nums.begin(), nums.begin()+mid+1);
            return findMin(temp);
        }
        if (nums[0] < nums[mid]) {
            vector<int> temp(nums.begin()+mid, nums.end());
            return findMin(temp);
        } else if (nums[0] > nums[mid]) {
            vector<int> temp(nums.begin(), nums.begin()+mid+1);
            return findMin(temp);
        }
        vector<int> temp(nums.begin()+mid, nums.end());
        vector<int> temp1(nums.begin(), nums.begin()+mid+1);
        return min(findMin(temp), findMin(temp1));
    }
};

