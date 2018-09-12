// Reverse a linked list from position m to n. Do it in one-pass.
//
// Note: 1 ≤ m ≤ n ≤ length of list.
//
// Example:
//
//
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
//
//


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

