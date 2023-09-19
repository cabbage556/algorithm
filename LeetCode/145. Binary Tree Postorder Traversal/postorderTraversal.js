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
  const nodeValues = [];
  function traverse(root, values) {
    if (!root) {
      return;
    }

    // postorder traversal
    // the left subtree - the right subtree - the root
    traverse(root.left, values);
    traverse(root.right, values);
    values.push(root.val);
  }

  traverse(root, nodeValues);
  return nodeValues;
};
