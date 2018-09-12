// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.
//
// Example:
//
//
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var newHead = new ListNode(-1);
    newHead.next = head;
    var node = newHead;
    while (node && node.next && node.next.val < x) {
        node = node.next;
    }
    if (!node || !node.next) {
        return newHead.next;
    }
    var flag = node;
    while (node && node.next) {
        if (node.next.val < x) {
            var temp = node.next;
            node.next = temp.next;
            temp.next = flag.next;
            flag.next = temp;
            flag = flag.next;
        } else {
            node = node.next;
        }
    }
    return newHead.next;
};
