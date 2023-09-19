/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const nodeValues = [];
  const queue = []; // bfs 큐
  queue.push(root);

  while (queue.length > 0) {
    const levelValues = []; // 같은 레벨에 위치한 노드들의 값을 저장하는 배열
    const queueLength = queue.length; // 큐 길이를 미리 저장해두어 해당 레벨의 노드 갯수만큼만 반복할 수 있게 함

    // 같은 레벨에 위치한 노드들 순회
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      levelValues.push(node.val);

      // 자식 노드가 있다면 큐에 추가
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    nodeValues.push(levelValues);
  }

  return nodeValues;
};
