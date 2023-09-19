function bfs(grid, x, y) {
  // 섬은 수평 또는 수직으로 근접한 육지(1)로 형성되고 물(0)로 둘러 쌓여 있음
  const dirs = [
    [1, 0], // 아래
    [-1, 0], // 위
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
  ];

  // bfs 큐
  const queue = [];
  queue.push([x, y]); // 루트 추가

  while (queue[0]) {
    // 현재 큐에 있는 갯수만큼만 반복
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();

      // current 좌표를 기준으로 아래, 위, 오른쪽, 왼쪽 좌표에 대해 로직 실행
      for (const dir of dirs) {
        const row = current[0] + dir[0]; // 행 좌표
        const col = current[1] + dir[1]; // 열 좌표

        // 행 좌표 유효성 확인
        if (row < 0 || row >= grid.length) {
          continue;
        }
        // 열 좌표 유효성 확인
        if (col < 0 || col >= grid[0].length) {
          continue;
        }
        // 방문 여부 확인
        if (grid[row][col] === "0") {
          continue;
        }

        // 유효한 좌표이면서 해당 좌표의 값이 0이 아닌 경우 0을 할당하여 방문 표시
        grid[row][col] = "0";

        // current의 이웃 좌표인 row, col을 큐에 추가하여 bfs 수행
        queue.push([row, col]);
      }
    }
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 값이 '1'인 경우 bfs 실행
      if (grid[i][j] === "1") {
        bfs(grid, i, j);
        islands++;
      }
    }
  }
  return islands;
};
