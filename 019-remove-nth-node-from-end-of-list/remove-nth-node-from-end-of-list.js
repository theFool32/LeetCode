// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
//
//
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?
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

