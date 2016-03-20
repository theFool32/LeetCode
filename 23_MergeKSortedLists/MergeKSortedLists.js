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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length;
    if (len <= 1) {
        return lists[0] || null;
    }

    len /= 2;
    return mergeTwoLists(mergeKLists(lists.slice(0,len)),
            mergeKLists(lists.slice(len)));
};
