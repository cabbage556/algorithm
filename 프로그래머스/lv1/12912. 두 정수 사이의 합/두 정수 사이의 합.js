function solution(a, b) {
    if (a === b) {
        return a;
    }
    
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let answer = 0;
    
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    
    return answer;
    
    // 수업 풀이 (반복문 방식)
//     let answer = 0;
    
//     if (a === b) return a;  // 엣지 케이스 처리
    
//     // 최솟값
//     // 반복문 실행 시 설정하는 초기값 (a와 b 중에서 더 작은 수)
//     // const start = a > b ? b : a;
//     const start = Math.min(a, b);
    
//     // 최댓값
//     // 반복문 종료 조건 설정 (a와 b 중에서 더 큰 수)
//     // const end = a > b ? a : b;
//     const end = Math.max(a, b);
    
//     for (let i = start; i <= end; i++) answer += i;
    
//     return answer;
    
    // 수업 풀이 (메서드 방식)
//     if (a === b) return a;
    
//     const min = Math.min(a, b);
//     const max = Math.max(a, b);
//     const answer = new Array(max - min)
//                         .fill(1)
//                         .reduce((acc, cur, i) => {
//                             const sum = (min + cur) + i;
//                             return acc + sum;
//                         }, min);
//     return answer;
}