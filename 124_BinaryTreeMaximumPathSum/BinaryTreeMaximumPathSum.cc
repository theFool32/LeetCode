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
    int max = -1<<31;
    int maxPathSum(TreeNode* root) {
        if (!root) return 0;
        dfs(root);
        return max;
    }
    int dfs(TreeNode* root) {
        if (!root) return 0;

        int l = dfs(root->left);
        int r = dfs(root->right);
        int s = root->val + std::max(l,0) + std::max(r,0);
        max = std::max(s, max);
        return std::max(root->val, root->val+std::max(l,r));
    }
};
