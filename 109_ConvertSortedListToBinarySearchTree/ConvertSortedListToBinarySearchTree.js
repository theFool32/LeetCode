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
