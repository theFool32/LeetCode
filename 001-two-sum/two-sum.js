// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
//
//
//  
//


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0, len = nums.length; i < len; ++i) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i + 1];
        }
        hash[nums[i]] = hash[nums[i]] || i + 1;
    }
}
