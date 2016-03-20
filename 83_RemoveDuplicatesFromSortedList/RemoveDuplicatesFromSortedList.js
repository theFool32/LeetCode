/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  var node = head.next, last = head;
  while (node) {
    if (node.val === last.val) {
      last.next = node.next;
    } else {
      last = node;
    }
    node = node.next;
  }
  return head;
};
