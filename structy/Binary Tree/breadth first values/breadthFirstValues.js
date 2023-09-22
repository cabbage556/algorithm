// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Write a function, breadthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in breadth-first order.
const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];
  while (queue[0]) {
    // n: queue의 길이
    // js의 shift 메서드 시간 복잡도: O(n)
    //   맨 앞 요소 제거: 1
    //   나머지 요소 앞으로 이동: n - 1
    const current = queue.shift();
    values.push(current.val);

    // left 노드를 right 노드보다 큐에 먼저 넣어서 먼저 순회함(문제 요구사항에 따라 달라질 수 있음)
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values;
};
