// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
//
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]
//



/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
  nums.sort()
  var result = []
  var map = {}
  var current = []
  var backtrack = function(n) {
    debugger
    if (n === nums.length) {
      if (!map[current.toString()]) {
        map[current.toString()] = 1
        result.push(Array.prototype.slice.call(current))
      }
      return
    }
    backtrack(n+1)
    current.push(nums[n])
    backtrack(n+1)
    current.pop()
  }
  backtrack(0)
  return result
}
