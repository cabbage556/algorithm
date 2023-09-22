// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// https://structy.net/problems/depth-first-values
// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth-first order.
const depthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const depthStack = [root];

  while (depthStack.length > 0) {
    const current = depthStack.pop();
    values.push(current.val);

    // right 노드를 스택에 먼저 넣어서 나중에 꺼낼 수 있게 함
    if (current.right !== null) depthStack.push(current.right);

    // left 노드를 스택에 나중에 넣어서 먼저 꺼낼 수 있게 함
    if (current.left !== null) depthStack.push(current.left);
  }

  return values;
};
