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
