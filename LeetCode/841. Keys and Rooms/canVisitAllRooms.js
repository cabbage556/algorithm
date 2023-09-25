/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  visit(rooms, visited);
  return rooms.length === visited.size;
};

// BFS
var visit = function (rooms, visited) {
  // BFS 큐
  const queue = [];

  // 루트 값으로 해시셋과 큐 초기화
  visited.add(0);
  for (const key of rooms[0]) queue.push(key);

  // BFS
  while (queue[0]) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const currentKey = queue.shift();
      if (visited.has(currentKey)) continue;

      visited.add(currentKey);
      const keys = rooms[currentKey];
      for (const key of keys) queue.push(key);
    }
  }
};
