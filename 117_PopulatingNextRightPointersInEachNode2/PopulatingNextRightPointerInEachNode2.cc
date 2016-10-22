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
        TreeLinkNode *current = root;
        TreeLinkNode *prev = nullptr;
        TreeLinkNode *next_level = nullptr;

        while (current) {
            if (current->left) {
                if (prev) {
                    prev->next = current->left;
                }
                prev = current->left;
                if (!next_level) {
                    next_level = current->left;
                }
            }
            if (current->right) {
                if (prev) {
                    prev->next = current->right;
                }
                prev = current->right;
                if (!next_level) {
                    next_level = current->right;
                }
            }
            if (current->next) {
                current = current->next;
            } else {
                current = next_level;
                next_level = nullptr;
                prev = nullptr;
            }
        }
    }
};
