/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  visit(rooms, visited);
  return rooms.length === visited.size;
};

// DFS
var visit = function (rooms, visited) {
  // DFS 스택
  const stack = [];

  // 루트 값으로 해시셋과 스택 초기화
  visited.add(0);
  for (const key of rooms[0]) stack.push(key);

  // DFS
  while (stack[0]) {
    const currentKey = stack.pop();
    if (!visited.has(currentKey)) {
      const keys = rooms[currentKey];
      for (const key of keys) stack.push(key);
      visited.add(currentKey);
    }
  }
};
