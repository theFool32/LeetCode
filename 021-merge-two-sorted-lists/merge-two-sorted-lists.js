// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }

    var current = new ListNode(Math.min(l1.val,l2.val)),
        beforeHead = new ListNode(0),
        temp;
    beforeHead.next = current;
    if (l1.val < l2.val) {
        l1 = l1.next;
    } else {
        l2 = l2.next;
    }
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            temp = new ListNode(l2.val);
            l2 = l2.next;
        }
        current.next = temp;
        current = current.next;
    }
    current.next = l1 || l2 || null;
    return beforeHead.next;
};

