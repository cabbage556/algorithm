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
var preorderTraversal = function (root) {
  const nodeValues = [];
  function traverse(root, values) {
    if (!root) {
      return;
    }

    // preorder traversal
    //    루트 방문 - 왼쪽 서브트리 순회 - 오른쪽 서브트리 순회
    values.push(root.val); // 루트 방문
    traverse(root.left, values); // 왼쪽 서브트리 순회
    traverse(root.right, values); // 오른쪽 서브트리 순회
  }
  traverse(root, nodeValues);
  return nodeValues;
};
