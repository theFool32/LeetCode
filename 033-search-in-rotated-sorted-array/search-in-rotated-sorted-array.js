// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
//
//
// Example 2:
//
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
//


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0, h = nums.length - 1, m;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if (target < nums[m]) {
            if (nums[l] < nums[h] || nums[m] < nums[l] || target > nums[h]) {
                h = m - 1;
            } else {
                l = m + 1;
            }
        } else if (target > nums[m]) {
            if (nums[l] < nums[h] || nums[m] > nums[l] || target < nums[l]) {
                l = m + 1;
            } else {
                h = m - 1;
            }

        } else {
            return m;
        }
    }
    return -1;
};

