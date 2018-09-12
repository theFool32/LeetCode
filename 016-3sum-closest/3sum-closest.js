// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
// Example:
//
//
// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//
//


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b) {
        return a - b;
    });
    var len    = nums.length,
        minDis    = Number.MAX_VALUE,
        result = 0,
        i,low,high;
    for (i = 0;i < len;++i) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        low  = i + 1;
        high = len - 1;
        while (low < high) {
            var curSum = nums[i] + nums[low] + nums[high];
            var curDis = Math.abs(curSum - target);
            if (curDis < minDis) {
                minDis = curDis;
                result = curSum;
            }

            if (curSum === target) {
                return target;
            } else if (curSum > target){
                while (low < --high 
                        && nums[high] === nums[high + 1]);
            } else {
                while (++low < high
                        && nums[low] === nums[low - 1]);
            }
        }
    }
    return result;
};

