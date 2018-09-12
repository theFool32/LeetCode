//
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
//
//
//
// Return a deep copy of the list.
//


/**
 * Definition for singly-linked list with a random pointer.
 * struct RandomListNode {
 *     int label;
 *     RandomListNode *next, *random;
 *     RandomListNode(int x) : label(x), next(NULL), random(NULL) {}
 * };
 */
class Solution {
public:
    map<RandomListNode*, RandomListNode*> nodeMap;

    RandomListNode *copyRandomList(RandomListNode *head) {
        if (!head) return nullptr;
        if (nodeMap.find(head) != nodeMap.end()) return nodeMap[head];
        RandomListNode *n = new RandomListNode(head->label);
        nodeMap[head] = n;
        if (!head->random) {
            n->random = nullptr;
        } else {
            n->random = copyRandomList(head->random);
        }
        if (!head->next) {
            n->next = nullptr;
        } else {
            n->next = copyRandomList(head->next);
        }
        return n;
    }
};

