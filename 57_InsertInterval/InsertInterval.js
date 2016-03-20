/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  var result = [];
  var isInserted = false;
  var overlap = function(a, b) {
    return !(a.end < b.start || a.start > b.end);
  }
  for (var i = 0, len = intervals.length;i < len;++i) {
    if (! overlap(intervals[i], newInterval)) {
      if (!isInserted && intervals[i].start > newInterval.end) {
        result.push(newInterval);
        isInserted = true;
      }
      result.push(intervals[i]);
    } else {
      newInterval.start = Math.min(newInterval.start, intervals[i].start);
      newInterval.end = Math.max(newInterval.end, intervals[i].end);
    }
  }
  if (!isInserted) {
    result.push(newInterval);
  }
  return result;
};
