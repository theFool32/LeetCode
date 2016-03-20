/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var beforeHead = new ListNode(0);
    beforeHead.next = head;
    var target  = beforeHead,
        current = beforeHead;

    while (n-- > 0) {
        current = current.next;
    }
    while (current.next) {
        current = current.next;
        target = target.next;
    }
    target.next = target.next.next;
    return beforeHead.next;
};
