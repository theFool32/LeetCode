/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  var length = 0, tempNode = head;
  while (tempNode) {
    ++length;
    tempNode = tempNode.next;
  }
  if (length <= 0) {
    return head;
  }
  k %= length;
  length -= (k + 1);
  if (length < 0) {
    return head;
  }
  tempNode = head;
  while (tempNode.next) {
    tempNode = tempNode.next;
  }
  tempNode.next = head;
  var shouldBeLastNode = head;
  while (length-- > 0) {
    shouldBeLastNode = shouldBeLastNode.next;
  }
  var newHead = shouldBeLastNode.next;
  shouldBeLastNode.next = null;
  return newHead;
};
