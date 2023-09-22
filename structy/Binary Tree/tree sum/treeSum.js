// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first traversal
const treeSum = (root) => {
  if (root === null) return 0;

  let sum = 0;
  const queue = [root];

  while (queue[0]) {
    const current = queue.shift();
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};
