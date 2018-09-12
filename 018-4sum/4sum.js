// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
//
// Note:
//
// The solution set must not contain duplicate quadruplets.
//
// Example:
//
//
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
//
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
//
//


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a,b) { return a - b; });
    var i      = 0,
        j      = 0,
        len    = nums.length,
        result = [],
        low,high;
    for (;i < len - 3;++i) {
        for (j = i + 1;j < len - 2;++j) {
            low = j + 1; high = len - 1;
            while (low < high) {
                if (nums[i] + nums[j] + nums[low]
                        + nums[high] === target) {
                    result.push([nums[i],nums[j],nums[low],
                            nums[high]]);
                    while (low < len - 1 
                            && nums[low] === nums[low+1]) {
                        ++low;
                    }
                    ++low;
                } else {
                    if (nums[i] + nums[j] + nums[low]
                            + nums[high] < target) {
                        ++low;
                    } else {
                        --high;
                    }
                }
            }
            while (j < len - 2 && nums[j] === nums[j+1]) {
                ++j;
            }
        }
        while (i < len - 3 && nums[i] === nums[i+1]) {
            ++i;
        }
    }
    return result;
};

