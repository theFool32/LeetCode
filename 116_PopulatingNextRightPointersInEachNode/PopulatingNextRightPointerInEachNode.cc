/**
 * Definition for binary tree with next pointer.
 * struct TreeLinkNode {
 *  int val;
 *  TreeLinkNode *left, *right, *next;
 *  TreeLinkNode(int x) : val(x), left(NULL), right(NULL), next(NULL) {}
 * };
 */
class Solution {
public:
    void connect(TreeLinkNode *root) {
        if (!root) return;
        auto current = root;
        while (current) {
            if (current->left) {
                current->left->next = current->right;
                current->right->next = current->next ? current->next->left : nullptr;
                current = current->next;
            } else {
                return;
            }
        }
        connect(root->left);
    }
};
