/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  var cur = 0,
  result = [];

  while (cur < words.length) {
    var next = cur + 1,
      count = words[cur].length;
    while (next < words.length && count + 1 + words[next].length <= maxWidth) {
      count += (1+words[next].length);
      next++;
    }

    var word_num = next - cur, 
    space = maxWidth - count + word_num - 1, 
    mid=0, odd=0;
    if (word_num > 1) {
      mid = Math.floor(space / (word_num-1));
      odd = space % (word_num-1);
    }

    var midstr = '';
    for (i = 0; i < mid; i++) {
      midstr += ' ';
    }

    var line = '';
    var i;
    if (next == words.length) {
      for (i = cur;i < words.length; i++) {
        line += (words[i] + (i == words.length-1 ? '' : ' '));
      }
    } else {
      word_num--;
      for (i = cur; i < next; i++) {
        line += words[i];
        if (word_num-- > 0) {
          line += midstr;
        }
        if (odd-- > 0) {
          line += ' '; 
        }
      }
    }

    var more = maxWidth - line.length;
    for (i = 0; i < more; i++) {
      line += ' ';
    }

    result.push(line);
    cur = next;
  }
  return result;
};
