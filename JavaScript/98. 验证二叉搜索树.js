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
var isValidBST = function(root) {
  var node = -Infinity;
  var traversing = function (root) {
    if (!root) {
      return true;
    }
    var left = root.left;
    var right = root.right;
    if (
      left !== null &&
      !traversing(left, node)
    ) {
      return false;
    }
    if (!(node < root.val)) return false;
    node = root.val;
    if (
      right !== null &&
      !traversing(right, node)
    ) {
      return false;
    }
    return true;
  }
  return traversing(root);
};