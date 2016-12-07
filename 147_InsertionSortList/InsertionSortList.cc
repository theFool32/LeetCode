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
    ListNode* insertionSortList(ListNode* head) {
        if (!head) return head;
        ListNode *h = new ListNode(-1);
        h->next = head;
        ListNode *end = head;
        while (end->next) {
            ListNode *p = end->next;
            ListNode *c = h;
            while (c != end && p->val > c->next->val) {
                c = c->next;
            }
            if (c != end) {
                end->next = p->next;
                p->next = c->next;
                c->next = p;
            } else {
                end = end->next;
            }
        }
        return h->next;
    }
};
