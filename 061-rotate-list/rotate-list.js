// Given a linked list, rotate the list to the right by k places, where k is non-negative.
//
// Example 1:
//
//
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
//
//
// Example 2:
//
//
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL
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
var rotateRight = function(head, k) {
    var length = 0, tempNode = head;
    while (tempNode) {
        ++length;
        tempNode = tempNode.next;
    }
    if (length <= 0) {
        return head;
    }
    k %= length;
    length -= (k + 1);
    if (length < 0) {
        return head;
    }
    tempNode = head;
    while (tempNode.next) {
        tempNode = tempNode.next;
    }
    tempNode.next = head;
    var shouldBeLastNode = head;
    while (length-- > 0) {
        shouldBeLastNode = shouldBeLastNode.next;
    }
    var newHead = shouldBeLastNode.next;
    shouldBeLastNode.next = null;
    return newHead;
};
