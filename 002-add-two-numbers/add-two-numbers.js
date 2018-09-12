// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(-1),
        r = result,
        cur;
    while (l1 !== null || l2 !== null) {
        cur = r.next || new ListNode(0);
        r.next = cur;
        cur.val += (l1 && l1.val || 0);
        cur.val += (l2 && l2.val || 0);
        if (cur.val > 9) {
            cur.next = new ListNode(1);
            cur.val -= 10;
        }
        r = cur;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    r = result.next;
    result.next = null;
    return r;
};

