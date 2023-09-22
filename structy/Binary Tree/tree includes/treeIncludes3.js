// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
const treeIncludes = (root, target) => {
  // 기저 조건의 순서를 따라 null을 먼저 확인
  if (root === null) return false;
  if (root.val === target) return true;

  // left 서브트리 결과 || right 서브트리 결과
  //    left 또는 right 서브트리에서 target과 같은 값을 갖는 노드가 있으면 true
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
