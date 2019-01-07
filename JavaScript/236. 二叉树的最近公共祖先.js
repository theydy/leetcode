/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let pFlag, qFlag;
  const pParentNode = [];
  const qParentNode = [];
  const findTreeNode = function (root) {
    if (!root || (pFlag && qFlag)) {
      return;
    }
    if (!pFlag) {
      pParentNode.push(root);
      root.val === p.val && (pFlag = true);
    }
    if (!qFlag) {
      qParentNode.push(root);
      root.val === q.val && (qFlag = true);
    }
    findTreeNode(root.left);
    findTreeNode(root.right);
    !pFlag && pParentNode.pop();
    !qFlag && qParentNode.pop();
  };
  findTreeNode(root);
  let len = Math.min(pParentNode.length, qParentNode.length);
  while (len > 0) {
    if (pParentNode[len - 1].val === qParentNode[len - 1].val) {
      return pParentNode[len - 1];
    }
    len--;
  }
  return root;
};