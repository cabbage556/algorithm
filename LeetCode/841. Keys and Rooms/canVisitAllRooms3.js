/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  // 해시셋 초기화 후 루트 값 0 추가
  const visited = new Set();
  visited.add(0);
  visit(rooms, 0, visited);
  return rooms.length === visited.size;
};

// DFS(recursion)
var visit = function (rooms, key, visited) {
  // 현재 방문한 방에 있는 열쇠들
  const keys = rooms[key];

  // 각 열쇠에 대해 재귀 호출(이미 방문한 경우는 건너뜀)
  for (const pickupKey of keys) {
    if (!visited.has(pickupKey)) {
      visited.add(pickupKey);
      visit(rooms, pickupKey, visited);
    }
  }
};
