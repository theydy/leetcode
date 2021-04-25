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

/**
 * 递归
 * @param root 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  
  const traversal = (root: TreeNode | null) => {
    if (!root) return;

    res.push(root.val);

    traversal(root.left);
    traversal(root.right);
  }

  traversal(root);

  return res;
};


/**
 * 迭代
 * @param root 
 */
function preorderTraversal_2(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = [root];
  const res: number[] = [];
  
  let target: TreeNode | null;

  while((target = stack.pop(), target || stack.length)) {
    if (!target) continue;

    stack.push(target.right);
    stack.push(target.left);

    res.push(target.val);
  }

  return res;
};