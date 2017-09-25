/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int countNodes(TreeNode* root) {
        if (root == nullptr) return 0;
        int rh = 0;
        TreeNode *p = root->right;
        while (p) {p=p->right; ++rh;}
        int lh = 0;
        p = root->left;
        while (p) {p=p->left; ++lh;}
        if (lh == rh) return pow(2, lh+1)-1;
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};
