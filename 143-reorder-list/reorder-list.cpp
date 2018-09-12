// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Example 1:
//
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
//
// Example 2:
//
//
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
//
//


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void reorderList(ListNode* head) {
        if (!head || !head->next) return;
        int len = 0;
        ListNode *node = head;
        while (node) {
            ++len;
            node = node->next;
        }
        node = head;
        for (int i = 0; i < ((len+1)>>1)-1; ++i) {
            node = node->next;
        }
        ListNode *end = node->next;
        while (end->next) {
            ListNode *n = end->next;
            end->next = n->next;
            n->next = node->next;
            node->next = n;
        }
        ListNode *p = head;
        while (p != node) {
            ListNode *n = node->next;
            node->next = n->next;
            n->next = p->next;
            p->next = n;
            p = n->next;
        }
    }
};

