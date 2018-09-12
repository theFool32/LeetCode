// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
//
//
//
//
// Example:
//
// Given this linked list: 1->2->3->4->5
//
// For k = 2, you should return: 2->1->4->3->5
//
// For k = 3, you should return: 3->2->1->4->5
//
// Note:
//
//
// 	Only constant extra memory is allowed.
// 	You may not alter the values in the list's nodes, only nodes itself may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var len = 0, p = head;
    while (p !== null) {
        p = p.next;
        ++len;
    }

    if (len < k) {
        return head;
    }

    var h     = new ListNode(0),
        c     = head,
        group = Math.floor(len / k);

    p = h;
    h.next = head;

    for (var j = 0;j < group;++j) {
        for (var i = 0;i < k - 1; ++i) {
            var temp = p.next;
            p.next = c.next;
            c.next = c.next.next;
            p.next.next = temp;
        }
        p = c;
        c = c.next;
    }
    return h.next;
};

