// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first traversal
const treeMinValue = (root) => {
  let minValue = root.val;
  const queue = [root];

  while (queue[0]) {
    const current = queue.shift();
    minValue = Math.min(minValue, current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return minValue;
};
