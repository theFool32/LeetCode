// The set [1,2,3,...,n] contains a total of n! unique permutations.
//
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//
//
// 	"123"
// 	"132"
// 	"213"
// 	"231"
// 	"312"
// 	"321"
//
//
// Given n and k, return the kth permutation sequence.
//
// Note:
//
//
// 	Given n will be between 1 and 9 inclusive.
// 	Given k will be between 1 and n! inclusive.
//
//
// Example 1:
//
//
// Input: n = 3, k = 3
// Output: "213"
//
//
// Example 2:
//
//
// Input: n = 4, k = 9
// Output: "2314"
//
//


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var index = 0, len = nums.length,
        i = len - 1, temp;
    if (i <= 0) {
        return ;
    }
    while (i > 0) {
        if (nums[i - 1] < nums[i]) {
            index = i;
            break;
        }
        --i;
    }
    if (index > 0) {
        i = len - 1;
        while (i >= index && nums[index - 1] >= nums[i]) {
            --i;
        }
        temp = nums[index - 1];
        nums[index - 1] = nums[i];
        nums[i] = temp;
    }
    for (i = 0;i < (len - index) / 2;++i) {
        temp = nums[index + i];
        nums[index + i] = nums[len - i - 1];
        nums[len - i - 1] = temp;
    }
};
    
    var s = [];
    for (var i = 1; i <= n;++i) {
        s.push(i);
    }
    k--;
    while (k--) {
        nextPermutation(s);
    }
    return s.join('');
};
