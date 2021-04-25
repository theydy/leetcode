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
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  
  const traversal = (root: TreeNode | null) => {
    if (!root) return;

    traversal(root.left);
    traversal(root.right);
    res.push(root.val);
  }

  traversal(root);

  return res;
};


/**
 * 迭代
 * @param root
 */
function postorderTraversal_2(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = [root];
  const res: number[] = [];
  
  let target: TreeNode | null;
  
  while((target = stack.pop(), target || stack.length)) {
    if (!target) continue;

    if (!target.right && !target.left) {
      res.push(target.val);
      continue;
    }

    stack.push(new TreeNode(target.val));
    stack.push(target.right);
    stack.push(target.left);

  }

  return res;
};