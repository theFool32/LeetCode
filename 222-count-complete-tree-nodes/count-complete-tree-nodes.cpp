// Given a complete binary tree, count the number of nodes.
//
// Note: 
//
// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
//
// Example:
//
//
// Input: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6
//
// Output: 6
//


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
