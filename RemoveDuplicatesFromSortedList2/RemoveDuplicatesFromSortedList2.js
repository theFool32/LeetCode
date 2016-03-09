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
  var node = new ListNode();
  node.next = head;
  var newHead = node, i = node.next, j = i.next;

  while (i && j) {
    while (j && i.val === j.val) {
      j = j.next;
    }
    if (j !== i.next) {
      i = j;
      node.next = i;
    } else {
      i = i.next;
      node = node.next;
    }
    j = i ? i.next : null;
  }
  return newHead.next;
};
