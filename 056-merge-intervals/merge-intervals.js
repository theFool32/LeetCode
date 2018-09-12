// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
//
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
//
//
// Example 2:
//
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
//


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 0) {
        return [];
    }
    intervals.sort(function(a, b) { return a.start - b.start;});
    var result = [];
    var current = new Interval(intervals[0].start, intervals[0].end);
    for (var i = 1, len = intervals.length; i < len; ++i) {
        if (current.end >= intervals[i].start) {
            current.end = Math.max(intervals[i].end, current.end);
        } else {
            result.push(new Interval(current.start, current.end));
            current.start = intervals[i].start;
            current.end = intervals[i].end;
        }
    }
    result.push(current);
    return result;
};
