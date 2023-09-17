/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const diagonal = [];
  for (let i = 0; i < mat.length + mat[0].length - 1; i++) {
    diagonal.push([]);
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      diagonal[i + j].push(mat[i][j]);
    }
  }

  for (let i = 0; i < diagonal.length; i += 2) {
    diagonal[i] = diagonal[i].reverse();
  }

  return diagonal.flat();
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
);
