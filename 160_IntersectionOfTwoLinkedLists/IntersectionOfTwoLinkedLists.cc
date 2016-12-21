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
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        auto getLenth = [](ListNode *head) {
            int len = 0;
            ListNode *p = head;
            while (p) {
                ++len;
                p = p->next;
            }
            return len;
        };
        int lenA = getLenth(headA);
        int lenB = getLenth(headB);
        ListNode *a = headA;
        ListNode *b = headB;
        int delta = abs(lenA-lenB);
        if (lenA>lenB) {
            while (delta--) {
                a = a->next;
            }
        } else {
            while (delta--) {
                b = b->next;
            }
        }
        while (a && a != b) {
            a = a->next;
            b = b->next;
        }
        return a;
    }
};
