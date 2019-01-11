const deepSearch = function (root, deep) {
  if (root) {
    deep++;
    return Math.max(deepSearch(root.right, deep), deepSearch(root.left, deep));
  }
  return deep;
}

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
var maxDepth = function(root) {
  return deepSearch(root, 0);
};