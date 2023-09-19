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
  if (!root) {
    return [];
  }

  // postorder
  // the left subtree - the right subtree - the root
  const nodeValues = [];
  const nodeStack = [];
  let current = root; // 노드 포인터
  let prev = null; // 답변에 추가된 노드 포인터

  while (current || nodeStack.length > 0) {
    // 왼쪽 노드가 존재할 때까지 왼쪽 노드를 따라 이동
    while (current) {
      nodeStack.push(current);
      current = current.left;
    }

    const lastNode = nodeStack[nodeStack.length - 1];
    // 스택 마지막 노드가 오른쪽 노드를 갖고 오른쪽 노드가 이미 처리한 노드가 아닌 경우
    // 오른쪽 노드로 이동
    if (lastNode.right && lastNode.right !== prev) {
      current = lastNode.right;
      continue;
    }

    // 스택 마지막 노드가 오른쪽 노드를 갖지 않거나 오른쪽 노드를 이미 처리한 경우
    nodeValues.push(lastNode.val);

    // 이미 처리한 노드임을 저장(오른쪽 노드를 갖는 노드를 처리하기 위함)
    prev = nodeStack.pop();
  }

  return nodeValues;
};
