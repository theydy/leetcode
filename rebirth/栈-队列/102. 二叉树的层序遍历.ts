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

type StackNode = { dept: number, node: TreeNode | null };

function createStackNode (node: TreeNode | null, dept: number): StackNode {
  return {
    node,
    dept,
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const stack: StackNode[] = [createStackNode(root, 0)];
  const res: number[][] = [];

  while(stack.length) {
    const { node, dept } = stack.shift();

    if (!node) continue;

    node.left && stack.push(createStackNode(node.left, dept + 1));
    node.right && stack.push(createStackNode(node.right, dept + 1));
    (res[dept] || (res[dept] = [])).push(node.val);
  }

  return res;
};