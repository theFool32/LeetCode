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
