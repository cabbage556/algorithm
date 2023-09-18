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
  if (!root) {
    return [];
  }

  // inorder traversal
  // the left subtree - the root - the right subtree
  const nodeValues = [];
  const nodeStack = [];
  let current = root; // 노드 포인터
  while (current || nodeStack.length > 0) {
    // 왼쪽 노드가 존재할 때까지 스택에 추가
    while (current) {
      nodeStack.push(current);
      current = current.left;
    }

    // 스택의 마지막 노드를 팝하여 답변에 추가
    current = nodeStack.pop();
    nodeValues.push(current.val);

    // 오른쪽 노드로 이동
    current = current.right;
  }
  return nodeValues;
};
