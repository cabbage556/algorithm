// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
const treeIncludes = (root, target) => {
  // 큐를 활용한 너비 우선 순회로 target과 일치하는 값 찾기
  const queue = [root];
  while (queue[0]) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};
