// Remove all elements from a linked list of integers that have value val.
//
// Example:
//
//
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
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
