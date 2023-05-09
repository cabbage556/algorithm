function solution(n) {
    let answer = -1;
    
    for (let i = 1; i ** 2 <= n; i++) {
        if (i ** 2 === n) {
            answer = (i + 1) ** 2;
            break;
        }
    }
    
    return answer;
    
    // 수업 풀이 (반복문 방식)
//     let answer = -1;
    
//     // i * i === n, i는 n의 제곱근
//     for (let i = 1; i * i <= n; i++) {
//         if (i * i === n) {
//             // 제곱근을 찾은 경우
//             // answer = i + 1;
//             // return answer * answer;
            
//             // return (i + 1) * (i + 1);
            
//             return (i + 1) ** 2;
//         }
//     }
    
    // // 제곱근을 찾지 못한 경우
    // return answer;
    
    // 수업 풀이 (메서드 방식)
    // let sqrt = Math.sqrt(n);
    // return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
    // return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}