/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];

  const leftSubtreeValues = postorderTraversal(root.left);
  const rightSubtreeValues = postorderTraversal(root.right);

  // postorder traversal
  // the left subtree - the right subtree - the root
  return [...leftSubtreeValues, ...rightSubtreeValues, root.val];
};
