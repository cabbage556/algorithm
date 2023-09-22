// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first traversal(recursive)
const treeSum = (root) => {
  // 기저 조건
  //  null 노드인 경우 0을 반환하여 재귀 종료시키기
  if (root === null) return 0;

  return treeSum(root.left) + root.val + treeSum(root.right);
};
