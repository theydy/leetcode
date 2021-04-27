/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (root: TreeNode | null, sum: number = 0) => {
    if (!root) return false;

    if (!root.left && !root.right) {
      return targetSum === sum + root.val;
    }

    return dfs(root.left, sum + root.val) || dfs(root.right, sum + root.val);
  }

  return dfs(root);
};