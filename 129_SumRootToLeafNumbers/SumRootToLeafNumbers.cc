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
    int sum = 0;
    int current = 0;

    void dfs(TreeNode *root) {
        current = current*10 + root->val;
        if (!root->left && !root->right) {
            sum += current;
            current /= 10;
            return;
        }
        if (root->left) {
            dfs(root->left);
        }
        if (root->right) {
            dfs(root->right);
        }
        current /= 10;
    }

    int sumNumbers(TreeNode* root) {
        if (!root) return 0;
        dfs(root);
        return sum;
    }
};
