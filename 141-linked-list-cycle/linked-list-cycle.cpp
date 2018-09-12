//
// Given a linked list, determine if it has a cycle in it.
//
//
//
// Follow up:
// Can you solve it without using extra space?
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
    bool hasCycle(ListNode *head) {
        if (!head || !head->next) return false;
        ListNode *p = head, *q = head->next;
        while (p != q) {
            p = p->next;
            if (q->next && q->next->next) {
                q = q->next->next;
            } else {
                return false;
            }
        }
        return true;
    }
};

