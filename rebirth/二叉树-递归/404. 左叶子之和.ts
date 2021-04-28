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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  let sum = 0;

  const traverse = (root: TreeNode | null, type: 'left' | 'right' = 'right') => {
    if (!root) return;
    if (!root.left && !root.right && type === 'left') {
      sum += root.val;
      return;
    }

    traverse(root.left, 'left');
    traverse(root.right);
  }

  traverse(root);

  return sum;
};