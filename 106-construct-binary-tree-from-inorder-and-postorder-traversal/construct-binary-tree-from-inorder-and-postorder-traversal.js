// Given inorder and postorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
//
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
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
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length !== inorder.length || postorder.length === 0) return null

  var _buildTree = function(p_b, p_e, i_b, i_e) {
    if (p_b > p_e || i_b > i_e) return null
    var root = new TreeNode(postorder[p_e])
    var i = i_e
    while (inorder[i] !== root.val) {
      --i
    }
    root.left = _buildTree(p_b, p_b+i-i_b-1, i_b, i-1)
    root.right = _buildTree(p_b+i-i_b, p_e-1, i+1, i_e)
    return root
  }
  return _buildTree(0, postorder.length-1, 0, inorder.length-1)
};

