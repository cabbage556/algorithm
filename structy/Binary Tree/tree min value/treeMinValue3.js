// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth firtst traversal(recursive)
const treeMinValue = (root) => {
  if (root === null) return Infinity;

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};
