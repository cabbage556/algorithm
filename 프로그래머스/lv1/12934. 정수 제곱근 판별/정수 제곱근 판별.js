function solution(n) {
//     let answer = -1;
    
//     for (let i = 1; i <= n; i++) {
//         if (i * i === n) {
            // answer = (i + 1) * (i + 1);
//             break;
//         }
//     }
    
    // return answer === -1 ? answer : answer * answer;
    
    // 수업 풀이
    let answer = -1;
    
    // i * i === n, i는 n의 제곱근
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) {
            // 제곱근을 찾은 경우
            answer = i + 1;
            return answer * answer;
        }
    }
    
    // 제곱근을 찾지 못한 경우
    return answer;
}