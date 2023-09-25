/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const updated = [];
  const queue = [];
  for (let row = 0; row < mat.length; row++) {
    updated.push(new Array(mat[row].length));

    for (let col = 0; col < mat[0].length; col++) {
      // 0인 경우 updated 배열의 같은 위치에 0을 할당하고 큐에 위치를 추가
      if (mat[row][col] === 0) {
        queue.push([row, col]);
        updated[row][col] = 0;
      }
      // 1인 경우 updated 배열의 같은 위치에 Infinity를 할당
      else {
        updated[row][col] = Infinity;
      }
    }
  }

  // 길이 변수
  let dist = 1;

  // BFS
  while (queue[0]) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      // 큐에서 꺼낸 좌표(0인 경우의 좌표)
      const [currentRow, currentCol] = queue.shift();

      // 큐에서 꺼낸 좌표에 대해 BFS 수행
      for (let [movedRow, movedCol] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        movedRow += currentRow;
        movedCol += currentCol;
        // 계산한 좌표가 유효하지 않으면 다음 좌표로 넘어가기
        if (movedRow < 0 || movedRow >= mat.length) continue;
        if (movedCol < 0 || movedCol >= mat[0].length) continue;

        // 계산한 좌표의 값이 현재 길이 변수의 값보다 작으면 다음 좌표로 넘어가기
        //    이미 방문한 좌표에 다시 방문하지 않게 함
        if (dist >= updated[movedRow][movedCol]) continue;

        // 인접한 셀을 현재 거리로 업데이트
        updated[movedRow][movedCol] = dist;

        // 업데이트한 셀의 좌표를 큐에 추가
        queue.push([movedRow, movedCol]);
      }
    }
    dist++;
  }
  return updated;
};
