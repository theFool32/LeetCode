// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note:
//
//
// 	All numbers (including target) will be positive integers.
// 	The solution set must not contain duplicate combinations.
//
//
// Example 1:
//
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
//
//
// Example 2:
//
//
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]
//
//


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [], len = candidates.length;
    candidates.sort(function(a,b) { return a - b; });

    var dfs = function(target, index, path) {
        for (var i = index; i < len;++i) {
            var temp = target - candidates[i];
            if (temp < 0) {
                continue;
            } else if (temp === 0) {
                var p = path !== '' ? path + ',' + candidates[i]
                            : String(candidates[i]);
                if (result.indexOf(p) === -1) {
                    result.push(p);
                }
            } else {
                dfs(target - candidates[i], i + 1, path !== '' 
                        ? path + ',' + candidates[i]
                        : String(candidates[i]));
            }
        }
    };
    dfs(target, 0, '');

    return result.map(function(v) { return v.split(',')
        .map(function(n) { return +n; }); });
    
};

