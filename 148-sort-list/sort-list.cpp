// Sort a linked list in O(n log n) time using constant space complexity.
//
// Example 1:
//
//
// Input: 4->2->1->3
// Output: 1->2->3->4
//
//
// Example 2:
//
//
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5
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
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) return head;
        ListNode *pre = head;
        ListNode *p1 = head;
        ListNode *p2 = head;
        while (p2 && p2->next) {
            pre = p1;
            p1 = p1->next;
            p2 = p2->next->next;
        }
        pre->next = nullptr;
        ListNode *r1 = sortList(head);
        ListNode *r2 = sortList(p1);
        return merge(r1, r2);
    }

    ListNode* merge(ListNode *h1, ListNode *h2) {
        if (!h2) return h1;
        if (!h1) return h2;
        ListNode *h = nullptr;
        if (h1->val < h2->val) {
            h = h1;
            h1 = h1->next;
        } else {
            h = h2;
            h2 = h2->next;
        }
        ListNode *p = h;
        while (h1 && h2) {
            if (h1->val < h2->val) {
                p->next = h1;
                h1 = h1->next;
            } else {
                p->next = h2;
                h2 = h2->next;
            }
            p = p->next;
        }
        if (h1) p->next = h1;
        if (h2) p->next = h2;
        return h;
    }
};

