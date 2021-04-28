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

function binaryTreePaths(root: TreeNode | null): string[] {
  let res: string[] = [];

  const traverse = (root: TreeNode | null, paths: string = '') => {
    if (!root) return;

    paths = paths ? (paths + '->' + root.val) : String(root.val);

    if (!root.left && !root.right) {
      res.push(paths);
    } 

    traverse(root.left, paths);
    traverse(root.right, paths);
  }

  traverse(root);

  return res;
};