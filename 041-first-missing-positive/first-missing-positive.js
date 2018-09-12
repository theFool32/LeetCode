// Given an unsorted integer array, find the smallest missing positive integer.
//
// Example 1:
//
//
// Input: [1,2,0]
// Output: 3
//
//
// Example 2:
//
//
// Input: [3,4,-1,1]
// Output: 2
//
//
// Example 3:
//
//
// Input: [7,8,9,11,12]
// Output: 1
//
//
// Note:
//
// Your algorithm should run in O(n) time and uses constant extra space.
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length,
        i;
    for (i = 0;i < len;) {
        if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
            var temp = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[temp - 1] = temp;
        } else {
            ++i;
        }
    }
    for (i = 0;i < len;++i) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};

