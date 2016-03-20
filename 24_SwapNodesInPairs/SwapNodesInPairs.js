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
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var h = new ListNode(0),
        p = h;

    while (head !== null && head.next !== null) {
        var temp  = head.next;
        p.next    = temp.next;
        temp.next = head;
        head.next = p.next;
        p.next    = temp;
        p         = head;
        head      = head.next;
    }
    return h.next;
};
