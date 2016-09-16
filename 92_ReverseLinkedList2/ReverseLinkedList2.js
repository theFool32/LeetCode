/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
  var first = new ListNode()
  first.next = head
  var cur = first
  for (var i = 1;i < m;++i) {
    cur = cur.next
  }
  var temp = cur.next
  for (var i = 0;i < n-m;++i) {
    var temp_next = temp.next
    temp.next = temp_next.next
    temp_next.next = cur.next
    cur.next = temp_next
  }
  return first.next
};
