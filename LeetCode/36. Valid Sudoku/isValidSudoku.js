/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hashMap = new Map();

  // 행 확인
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      }

      // 행에 중복 숫자가 있으면 유효하지 않음
      if (hashMap.has(board[i][j])) {
        return false;
      } else {
        hashMap.set(board[i][j], i);
      }
    }

    // 행을 반복할 때마다 해시 맵 초기화
    hashMap.clear();
  }

  // 열 확인
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === ".") {
        continue;
      }

      // 열에 중복 숫자가 있으면 유효하지 않음
      if (hashMap.has(board[j][i])) {
        return false;
      } else {
        hashMap.set(board[j][i], j);
      }
    }

    // 열을 반복할 때마다 해시 맵 초기화
    hashMap.clear();
  }

  // 해시 맵의 키(서브 박스)
  let key = -1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 숫자 3개를 반복할 때마다 키 증가
      if (j % 3 === 0) {
        key++;
      }
      if (board[i][j] === ".") {
        continue;
      }

      const digits = hashMap.get(key) ?? null;
      if (!digits) {
        hashMap.set(key, [board[i][j]]);
      } else {
        // 서브 박스에 중복 숫자가 있으면 유효하지 않음
        if (digits.includes(board[i][j])) {
          return false;
        } else {
          digits.push(board[i][j]);
        }
      }
    }

    // 0~2행의 경우(키: 0, 1, 2)
    if (i < 2) {
      key = -1;
    }
    // 3~5행의 경우(키: 3, 4, 5)
    else if (i < 5) {
      key = 2;
    }
    // 6~8행의 경우(키: 6, 7, 8)
    else {
      key = 5;
    }
  }

  return true;
};
