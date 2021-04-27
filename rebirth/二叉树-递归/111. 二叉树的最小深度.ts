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

function minDepth(root: TreeNode | null): number {
  let deep = 0;

  const traverse = (root: TreeNode | null, dept: number = 1) => {
    if (!root) return;

    if (!root.left && !root.right) {
      deep = deep === 0 ? dept : Math.min(deep, dept);
      return;
    }

    traverse(root.left, dept + 1);
    traverse(root.right, dept + 1);

  }

  traverse(root);

  return deep;
};