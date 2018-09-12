// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Your goal is to reach the last index in the minimum number of jumps.
//
// Example:
//
//
// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
//
// Note:
//
// You can assume that you can always reach the last index.


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var result = 0;
    for (var i = 0, c = 0, len = nums.length - 1; c < len; ++result) {
        var max = 0;
        for (var j = i;j <= c; ++j) {
            max = Math.max(max, j + nums[j]);
        }
        i = c + 1;
        c = max;
    }
    return result;
};

