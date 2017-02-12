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
    ListNode* removeElements(ListNode* head, int val) {
        ListNode *newHead = new ListNode(-1);
        newHead->next = head;
        ListNode *p = newHead;
        while (p->next) {
            if (p->next->val == val) {
                ListNode *temp = p->next;
                p->next = temp->next;
                delete temp;
            } else {
                p = p->next;
            }
        }
        ListNode *ans = newHead->next;
        delete newHead;
        return ans;
    }
};
