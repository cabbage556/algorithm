function solution(priorities, location) {
  let answer = 0;
  let originPriority = priorities[location]; // location에 위치한 우선순위
  priorities[location] = "a"; // location 프로세스 구분

  while (true) {
    const indexOfLocation = priorities.indexOf("a"); // location 프로세스의 인덱스
    priorities[indexOfLocation] = originPriority; // location 프로세스에 원래 우선순위 할당

    const topPriority = Math.max(...priorities); // 최우선순위 계산
    priorities[indexOfLocation] = "a"; // location 프로세스 구분

    if (priorities[0] === "a") {
      if (originPriority === topPriority) {
        // location 프로세스가 큐 가장 앞에 있고 최우선순위인 경우
        return ++answer;
      }
    }

    // 큐 맨 앞에 있는 프로세스의 우선순위가 최우선순위인 경우
    if (priorities[0] === topPriority) {
      priorities.shift(); // 큐에서 제거
      answer++; // 실행 횟수 증가
    }
    // 큐 맨 앞에 있는 프로세스의 우선순위가 최우선순위가 아닌 경우
    else {
      priorities.push(priorities[0]); // 큐 뒤로 보내기
      priorities.shift(); // 큐 맨 앞에서 제거
    }
  }
}