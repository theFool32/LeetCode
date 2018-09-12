//
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
//
//
//
// Note: Do not modify the linked list.
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
    ListNode *detectCycle(ListNode *head) {
        if (!head || !head->next) return nullptr;
        ListNode *p = head, *q = head->next;
        int step = 0;
        while (p != q) {
            p = p->next;
            ++step;
            if (q->next && q->next->next) {
                q = q->next->next;
            } else {
                return nullptr;
            }
        }
        p = head;
        q = q->next;
        while (p != q) {
            p = p->next;
            q = q->next;
        }
        return p;
    }
};

