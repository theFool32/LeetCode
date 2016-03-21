/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var newHead = new ListNode(-1);
  newHead.next = head;
  var node = newHead;
  while (node && node.next && node.next.val < x) {
    node = node.next;
  }
  var flag = node;
  while (node && node.next) {
    if (node.next.val < x) {
      var temp = node.next;
      node.next = temp.next;
      temp.next = flag.next;
      flag.next = temp;
      flag = flag.next;
    } else {
      node = node.next;
    }
  }
  return newHead.next;
};
