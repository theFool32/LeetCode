// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example:
//
//
// Given the sorted linked list: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5
//
//


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null
    var index = ~~(nums.length/2)
    var root = new TreeNode(nums[index])
    root.left = sortedArrayToBST(nums.slice(0, index))
    root.right = sortedArrayToBST(nums.slice(index+1))
    return root
  };
  var arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return sortedArrayToBST(arr)
};

