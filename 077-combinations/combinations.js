// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
//
//


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [],
        current = [],
        used = [];
        
    var _r = function(dep, len) {
        if (len >= k) {
            result.push([].concat(current));
            return ;
        }
        for (var i = dep;i <= n;++i) {
            if (!used[i]) {
                used[i] = true;
                current.push(i);
                _r(i+1, len+1);
                current.pop();
                used[i] = false;
            }
        }
    };
    _r(1, 0);
    return result;
};
