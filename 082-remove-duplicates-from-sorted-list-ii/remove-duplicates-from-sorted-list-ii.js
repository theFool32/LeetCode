// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
//
// Example 1:
//
//
// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
//
//
// Example 2:
//
//
// Input: 1->1->1->2->3
// Output: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   if (!head) {
       return head;
   }
   var node = new ListNode();
   node.next = head;
   var newHead = node, i = node.next, j = i.next;
   
   while (i && j) {
       while (j && i.val === j.val) {
           j = j.next;
       }
       if (j !== i.next) {
           i = j;
           node.next = i;
       } else {
           i = i.next;
           node = node.next;
       }
       j = i ? i.next : null;
   }
   return newHead.next;
};
