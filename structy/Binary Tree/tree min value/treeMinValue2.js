// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first traversal(iterative)
const treeMinValue = (root) => {
  let minValue = root.val;
  const stack = [root];

  while (stack[0]) {
    const current = stack.pop();
    minValue = Math.min(minValue, current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return minValue;
};
