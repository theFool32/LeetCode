// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
//
//


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b) {
        return a - b;
    });
    var i = 0, len = nums.length,
        result = [],
        low,high;
    for (;i < len - 2;++i) {
        low = i + 1;
        high = len - 1;
        while (low < high) {
            if (nums[low] + nums[high] + nums[i] === 0) {
                result.push([nums[i],nums[low],nums[high]]);
                while (low < len - 1 
                        && nums[low] === nums[low+1]) {
                    ++low;
                }
                ++low;
            } else {
                if (nums[low] + nums[high] + nums[i] < 0) {
                    ++low;
                } else {
                    --high;
                }
            }
        }
        while (i < len - 3 && nums[i] === nums[i+1]) {
            ++i;
        }
    }
    return result;
};

