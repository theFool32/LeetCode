/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [], len = candidates.length;
    candidates.sort(function(a,b) { return a - b; });

    var dfs = function(target, index, path) {
        for (var i = index; i < len;++i) {
            var temp = target - candidates[i];
            if (temp < 0) {
                continue;
            } else if (temp === 0) {
                result.push(path.concat([candidates[i]]));
            } else {
                dfs(target - candidates[i], i, path.concat([candidates[i]]));
            }
        }
    };
    dfs(target, 0, []);

    return result;

};
