// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first traversal(recursive)
const maxPathSum = (root) => {
  // null 노드인 경우 -Infinity를 리턴하여 Math.max 계산 시 항상 다른 값이 선택되도록 함
  if (root === null) return -Infinity;

  // left, right 노드가 없는 경우 해당 노드의 값을 바로 리턴
  if (root.left === null && root.right === null) return root.val;

  // 현재 노드의 값 + Math.max(왼쪽 서브트리의 최댓값 + 오른쪽 서브트리의 최댓값)
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
