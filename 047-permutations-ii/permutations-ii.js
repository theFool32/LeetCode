// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// Example:
//
//
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
//
//


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len    = nums.length,
        result = [],
        used   = new Array(len),
        temp   = new Array(len);

    var _permuteUnique = function(i) {
        if (i >= len) {
            var r = [].concat(temp);
            result.push(r);
            return ;
        }
        var map = {};
        for (var j = 0;j < len;++j) {
            if (used[j]) {
                continue;
            }
            if (!map[nums[j]]) {
                used[j] = true;
                temp[i] = nums[j];
                _permuteUnique(i + 1);
                used[j] = 0;
                map[nums[j]] = 1;
            }
        }
    };

    _permuteUnique(0);
    return result;
};

