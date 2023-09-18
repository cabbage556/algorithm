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
  const nodeValues = [];
  function traverse(root, values) {
    if (!root) {
      return;
    }

    // inorder traversal
    // the left subtree - the root - the right subtree
    traverse(root.left, values); // 먼저 현재 노드의 왼쪽 서브트리 순회
    values.push(root.val); // 다음으로 현재 노드 방문
    traverse(root.right, values); // 마지막으로 현재 노드의 오른쪽 서브트리 순회
  }
  traverse(root, nodeValues);
  return nodeValues;
};
