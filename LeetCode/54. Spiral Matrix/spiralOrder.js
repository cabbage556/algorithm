/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const spiral = [];
  let direction = 0;
  let row = 0;
  let col = 0;
  let rowLength = matrix[0].length;
  let colLength = matrix.length;
  let leftPadding = 0;
  let topPadding = 0;

  while (spiral.length < matrix.length * matrix[0].length) {
    spiral.push(matrix[row][col]);

    // right
    if (direction === 0) {
      if (col === rowLength - 1) {
        direction = 1;
        row++;
        rowLength--;
        topPadding++;
      } else {
        col++;
      }
      continue;
    }

    // down
    if (direction === 1) {
      if (row === colLength - 1) {
        direction = 2;
        col--;
        colLength--;
      } else {
        row++;
      }
      continue;
    }

    // left
    if (direction === 2) {
      if (col === leftPadding) {
        direction = 3;
        row--;
        leftPadding++;
      } else {
        col--;
      }
      continue;
    }

    // up
    if (direction === 3) {
      if (row === topPadding) {
        direction = 0;
        col++;
      } else {
        row--;
      }
    }
  }

  return spiral;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
