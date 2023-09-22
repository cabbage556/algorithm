/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) {
        count += 1;
      }
    }
  }
  return count;
};

var explore = function (grid, row, col, visited) {
  // 행과 열이 유효 범위에 있는지 확인
  const validRowBounds = 0 <= row && row < grid.length;
  const validColBounds = 0 <= col && col < grid[0].length;
  if (!validRowBounds || !validColBounds) {
    return false;
  }

  // grid의 행과 열에 해당하는 값을 확인
  if (grid[row][col] === "0") {
    return false;
  }

  // 방문한 적이 있는지 확인
  // 방문하지 않았다면 visited 해시셋에 추가
  const position = `${row},${col}`;
  if (visited.has(position)) {
    return false;
  }
  visited.add(position);

  // 위,아래,좌,우 이웃 방문
  explore(grid, row - 1, col, visited); // up
  explore(grid, row + 1, col, visited); // down
  explore(grid, row, col - 1, visited); // left
  explore(grid, row, col + 1, visited); // right

  return true;
};
