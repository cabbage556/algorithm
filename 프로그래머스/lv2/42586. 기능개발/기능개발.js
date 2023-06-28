function solution(progresses, speeds) {
    // progresses: 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
    // speeds: 각 작업의 개발 속도가 적힌 정수 배열
    // return: 각 배포마다 몇 개의 기능이 배포되는지를 저장한 배열
    
    const answer = [];
    const remainings = []; // 배포까지 남은 일 수를 저장하는 배열
    let completes = [];    // 같이 배포 가능한 작업들의 일 수를 임시로 저장하는 배열
    
    for (let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];
        
        remainings.push(Math.ceil((100 - progress) / speed)); // 모든 작업들의 남은 일 수를 계산하여 저장
    }
    
    for (let i = 0; i < remainings.length; i++) {
        if (i === 0) {
            completes.push(remainings[i]);
            continue;
        }
        
        if (completes[0] >= remainings[i]) { // 같이 배포 가능한 작업인 경우
            completes.push(remainings[i]);
        } else {                             // 같이 배포 가능한 작업이 아닌 경우 초기화
            answer.push(completes.length);
            completes = [];
            completes.push(remainings[i]);
        }
        
        if (i === remainings.length - 1) {   // 마지막 작업인 경우 배포
            answer.push(completes.length);
        }
    }
    
    return answer;
}