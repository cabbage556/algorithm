/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // 해시셋 대신 해시맵을 사용하여 이미 생성한 노드를 값으로 저장
  const visited = new Map();
  return dfs(node, visited);
};

var dfs = function (node, visited) {
  if (node === null) return;

  // 기존 노드의 값으로 새로운 노드를 생성
  // 기존 노드의 값을 키로, 생성한 노드를 값으로 해시맵에 저장
  //    문제 조건에서 노드의 값이 유일하다고 했기 때문에 가능
  const newNode = new Node(node.val);
  visited.set(node.val, newNode);

  // 순회 중인 노드의 이웃 노드 방문
  for (let i = 0; i < node.neighbors.length; i++) {
    // 이미 방문하여 새로운 노드를 생성했다면
    // 해시맵에서 이웃 노드를 가져와서 이웃에 추가하기
    if (visited.has(node.neighbors[i].val)) {
      newNode.neighbors.push(visited.get(node.neighbors[i].val));
    }
    // 방문하지 않아서 새로운 노드를 생성하지 않았다면 재귀 호출
    else {
      newNode.neighbors.push(dfs(node.neighbors[i], visited));
    }
  }

  // 새롭게 생성한 노드 리턴
  return newNode;
};
