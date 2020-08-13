/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  return height(root) !== -1;
};

function height(root) {
  if (!root) return 0;

  let left = height(root.left);
  if (left === -1) return -1;
  let right = height(root.right);
  if (right === -1) return -1;

  return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}