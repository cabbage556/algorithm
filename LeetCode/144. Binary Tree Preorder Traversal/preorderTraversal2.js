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
  if (!root) {
    return [];
  }

  const nodeValues = [];
  const nodeStack = [];
  nodeStack.push(root);

  while (nodeStack.length > 0) {
    // 가장 마지막에 추가한 노드 꺼내기
    const node = nodeStack.pop();

    // preorder
    // the root - the left subtree - the right subtree
    nodeValues.push(node.val); // 현재 노드의 값 추가
    if (node.right) {
      nodeStack.push(node.right);
    }
    // right 노드 다음에 left 노드를 추가하여 스택에서 left 노드를 먼저 꺼낼 수 있게 함
    if (node.left) {
      nodeStack.push(node.left);
    }
  }
  return nodeValues;
};
