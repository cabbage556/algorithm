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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 기저 조건
  //    트리 노드가 없는 경우
  //    마지막 트리 노드까지 확인한 경우
  //    찾는 값과 트리 노드의 값이 같은 경우
  if (!root || root.val === val) {
    return root;
  }

  // 현재 트리 노드의 val이 val보다 크면 왼쪽 자식 노드 탐색
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  // 현재 트리 노드의 val이 val보다 작으면 오른쪽 자식 노드 탐색
  else {
    return searchBST(root.right, val);
  }
};
