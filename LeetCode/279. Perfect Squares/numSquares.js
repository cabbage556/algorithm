/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const visited = new Set();
  const queue = [n];
  let count = 1;

  // BFS
  while (queue[0]) {
    const queueLength = queue.length;

    // 현재 큐 길이만큼만 반복
    for (let i = 0; i < queueLength; i++) {
      const num = queue.shift();

      // 현재 숫자에서 제곱값을 뺀 값을 이웃 노드로 갖는 그래프라고 생각하기
      // n이 20인 경우 라운드1에서 큐에 추가되는 노드들
      // (20) -> (19)
      //      -> (16)
      //      -> (11)
      //      -> (4)
      for (let j = 1; j ** 2 <= num; j++) {
        const diff = num - j ** 2;
        if (diff === 0) {
          return count;
        }

        // n이 20인 경우 첫 번째 루프
        if (!visited.has(diff)) {
          queue.push(diff);
          visited.add(diff);
        }
      }
    }

    count++;
  }

  return count;
};
