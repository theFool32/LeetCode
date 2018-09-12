// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// Example 1:
//
//
// Input: [1,2,3]
//
//        1
//       / \
//      2   3
//
// Output: 6
//
//
// Example 2:
//
//
// Input: [-10,9,20,null,null,15,7]
//
//    -10
//    / \
//   9  20
//     /  \
//    15   7
//
// Output: 42
//
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

