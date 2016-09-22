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
};
