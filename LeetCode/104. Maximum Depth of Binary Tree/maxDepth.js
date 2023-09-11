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
 * @return {number}
 */
var maxDepth = function (root) {
  // base case
  if (!root) {
    return 0;
  }

  // left 자식 노드의 최대 깊이, right 자식 노드의 최대 깊이 중 더 큰 것 + 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
