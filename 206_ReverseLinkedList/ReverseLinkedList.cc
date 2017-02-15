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
    ListNode* reverseList(ListNode* head) {
        ListNode *newHead = new ListNode(-1);
        ListNode *p = head;
        while (p) {
            ListNode *n = newHead->next;
            newHead->next = p;
            p = p->next;
            newHead->next->next = n;
        }
        p = newHead->next;
        delete newHead;
        return p;
    }
};
