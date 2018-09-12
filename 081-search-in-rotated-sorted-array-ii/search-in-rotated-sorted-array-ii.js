// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
//
// You are given a target value to search. If found in the array return true, otherwise return false.
//
// Example 1:
//
//
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
//
//
// Example 2:
//
//
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
//
// Follow up:
//
//
// 	This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// 	Would this affect the run-time complexity? How and why?
//
//


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
     var l = 0, h = nums.length - 1, m;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if(nums[m] === target) {
            return true;
        }
        if(nums[l] < nums[m]){
            if(target < nums[l] || target > nums[m]){
                l = m + 1;
            }else{
                h = m - 1;
            }
        } else if(nums[l] > nums[m]){
            if(target < nums[m] || target > nums[h]){
                h = m -1;
            }else{
                l = m + 1;
            }
        }else{
            ++l;
        }
    }
    return false;
};
