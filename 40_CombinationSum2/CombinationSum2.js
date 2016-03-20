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
