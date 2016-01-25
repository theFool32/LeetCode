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
