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
var inorderTraversal = function (root) {
  if (root === null) return [];

  const leftSubtreeValues = inorderTraversal(root.left);
  const rightSubtreeValues = inorderTraversal(root.right);

  // inorder traversal
  // the left subtree - the root - the right subtree
  return [...leftSubtreeValues, root.val, ...rightSubtreeValues];
};
