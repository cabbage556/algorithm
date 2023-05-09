function solution(n) {
    const answer = [];
    n = String(n);
    
    for (let i = n.length - 1; i >= 0; i--) {
        answer.push(n[i] * 1);
    }
    
    return answer;
    
    // 수업 풀이 반복문 방식
//     n = String(n);
//     const answer = [];
    
//     for (let i = n.length - 1; i >= 0; i--) {
//         answer.push(Number(n[i]));
//     }
//     return answer;
    
    // 수업 풀이 메서드 방식
    // const answer = String(n).split("").reverse().map(el => Number(el));
    // return answer;
}