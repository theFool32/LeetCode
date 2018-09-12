// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//
//
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -999;
    var cur = 0;
    for (var i = 0, len = nums.length; i < len;++i) {
        cur += nums[i];
        if (cur > max) {
            max = cur;
        }
        if (cur < 0) {
            cur = 0;
        }
    }
    return max;
};
