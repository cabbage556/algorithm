/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  // return the number of pairs (ri, cj) such that row ri and column cj are equal
  const rowHash = {};
  let pairsCount = 0;

  for (const row of grid) {
    rowHash[row] = rowHash[row] ?? 0;
    rowHash[row]++;
  }

  for (let col = 0; col < grid[0].length; col++) {
    const colArray = [];
    for (let row = 0; row < grid.length; row++) {
      colArray.push(grid[row][col]);
    }

    if (rowHash[colArray]) {
      pairsCount += rowHash[colArray];
    }
  }
  return pairsCount;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
