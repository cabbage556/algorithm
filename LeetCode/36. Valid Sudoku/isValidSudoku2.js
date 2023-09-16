/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let key = i;
    const rowHashMap = new Map();
    const colHashMap = new Map();
    const boxHashMap = new Map();

    for (let j = 0; j < board[0].length; j++) {
      const rowCell = board[i][j]; // 행 숫자
      const colCell = board[j][i]; // 열 숫자
      const boxCell =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]; // 박스 숫자

      if (rowCell !== ".") {
        // 행 숫자가 중복되면 유효하지 않음
        if (rowHashMap.has(rowCell)) {
          return false;
        }
        rowHashMap.set(rowCell, i);
      }

      if (colCell !== ".") {
        // 열 숫자가 반복되면 유효하지 않음
        if (colHashMap.has(colCell)) {
          return false;
        }
        colHashMap.set(colCell, i);
      }

      if (boxCell !== ".") {
        const digits = boxHashMap.get(key) ?? null;
        if (!digits) {
          boxHashMap.set(key, [boxCell]);
          continue;
        }

        // 박스 숫자가 중복되면 유효하지 않음
        if (digits.includes(boxCell)) {
          return false;
        }

        digits.push(boxCell);
      }
    }
  }

  return true;
};
