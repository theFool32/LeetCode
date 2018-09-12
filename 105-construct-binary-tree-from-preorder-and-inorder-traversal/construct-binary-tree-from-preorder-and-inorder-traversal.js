// Given preorder and inorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
//
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
//
// Return the following binary tree:
//
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length !== inorder.length || preorder.length === 0) return null

  var _buildTree = function(p_b, p_e, i_b, i_e) {
    if (p_b > p_e || i_b > i_e) return null
    var root = new TreeNode(preorder[p_b])
    var i = inorder.indexOf(root.val, i_b)
    root.left = _buildTree(p_b+1, p_b+i-i_b, i_b, i-1)
    root.right = _buildTree(p_b+i-i_b+1, p_e, i+1, i_e)
    return root
  }
  return _buildTree(0, preorder.length-1, 0, inorder.length-1)
};

