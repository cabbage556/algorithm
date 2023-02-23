function solution(progresses, speeds) {
    const dayCounts = new Array(progresses.length); // 배포까지 남은 일수를 저장하는 배열
    const answer = [];    // 정답 배열
    let completes = [];   // 배포 가능한 작업들을 일시적으로 저장하는 배열
  
    for (let i = 0; i < progresses.length; i++) {
        let dayCount = 0;

        while (progresses[i] < 100) { // 배포까지의 남은 일수 계산
            dayCount++;
            progresses[i] += speeds[i];
        }

        dayCounts[i] = dayCount; // 배포까지의 남은 일수 저장
    }
  
    for (let i = 0; i < progresses.length; i++) {
        if (i === 0) {
            completes.push(dayCounts[i]);
            continue;
        }

        if (completes.at(0) >= dayCounts[i]) { // completes 배열의 첫번째 요소(배포까지 남은 일수)보다 적다면 함께 배포하기 위해 같이 저장
          completes.push(dayCounts[i]);
        } else {
          answer.push(completes.length); // 한번에 배포 가능한 모든 작업들의 갯수를 정답 배열에 저장
          completes = [];                // 빈 배열 초기화
          completes.push(dayCounts[i]);  // 한번에 배포할 수 없는 작업 저장
        }

      if (i === progresses.length - 1) { // 마지막 인덱스 처리
        answer.push(completes.length);         
      }
    }
    
    return answer;
}