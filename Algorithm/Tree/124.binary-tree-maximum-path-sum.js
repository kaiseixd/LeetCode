/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = Number.MIN_SAFE_INTEGER;
  dfs(root);
  return max;

  function dfs(root) {
    if (!root) return Number.MIN_SAFE_INTEGER;
  
    let left = dfs(root.left);
    let right = dfs(root.right);
    let leafMax = Math.max(root.val, Math.max(root.val + left, root.val + right));
    let rootVal = root.val + left + right;
    max = Math.max(max, Math.max(leafMax, rootVal));
  
    return leafMax;
  }
};