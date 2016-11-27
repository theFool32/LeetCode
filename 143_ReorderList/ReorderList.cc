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
