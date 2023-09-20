function getNextWheels(s = "0000") {
  const wheels = [];

  // 현재 자물쇠 번호의 다음 자물쇠 번호를 모두 구하기
  // 현재 자물쇠 번호가 0000인 경우
  //  1000 9000 0100 0900 0010 0090 0001 0009
  //  0000의 이웃 노드: [1000, 9000, 0100, 0900, 0010, 0090, 0001, 0009]
  for (let i = 0; i < s.length; i++) {
    wheels.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    wheels.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }
  return wheels;
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 그래프의 최단 경로 문제로 생각하기
  //    0000부터 9999까지 10000개의 노드가 존재
  //    1자리가 차이나면 엣지로 연결된 노드
  //    BFS를 사용해 최단 경로 문제 해결하기

  const deadend = new Set(deadends); // 해시 셋으로 만들어 탐색을 빠르게 함
  const visited = new Set(); // 이미 확인한 노드임을 표시 - 무한루프 방지(큐에 다시 추가하지 않음)

  let turn = 0;
  const queue = []; // bfs 큐
  queue.push("0000");

  // BFS
  while (queue[0]) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      // 현재 자물쇠 번호가 목표 번호인지 확인
      if (current === target) {
        return turn;
      }
      // deadend를 통해 목표 번호까지 갈 수 없음
      if (deadend.has(current)) {
        continue;
      }

      // 현재 자물쇠 번호의 다음 자물쇠 번호를 모두 구함
      for (const next of getNextNodes(current)) {
        // 이미 확인한 자물쇠 번호이면 확인하지 않음
        if (visited.has(next)) {
          continue;
        }

        // 확인했음을 표시
        visited.add(next);

        // 현재 자물쇠 번호의 다음 자물쇠 번호가 모두 큐에 추가됨
        queue.push(next);
      }
    }

    // BFS 1라운드마다 자물쇠 번호를 옮긴 횟수가 1회 증가한다고 볼 수 있음
    //    엣지를 따라 루트 노드부터 한 단계씩 이동하는 것
    turn++;
  }

  return -1;
};
