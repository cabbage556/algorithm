// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
const treeIncludes = (root, target) => {
  if (root === null) return false;

  // 스택을 활용한 깊이 우선 순회로 target과 일치하는 값 찾기
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};
