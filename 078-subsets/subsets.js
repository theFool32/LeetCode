// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
//


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [],
        numsLen = nums.length;
    nums.sort(function(a, b) {
        return a - b;
    });
    var combine = function(n, k) {
    var current = [],
        used = [];
        
    var _r = function(dep, len) {
        if (len >= k) {
            result.push([].concat(current));
            return ;
        }
        for (var i = dep;i < numsLen;++i) {
            if (!used[i]) {
                used[i] = true;
                current.push(nums[i]);
                _r(i+1, len+1);
                current.pop();
                used[i] = false;
            }
        }
    };
    _r(0, 0);
    };
    for (var i = 0, len = nums.length;i <= len;++i) {
        combine(1, i);
    }
    return result;
};
