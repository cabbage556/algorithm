function solution(a, b) {
    let answer = 0;
    
    for (let i = 0; i < a.length; i++) {
        answer += (a[i] * b[i]);
    }
    
    return answer;
    
    // 수업 풀이 (메서드 방식)
    // const answer = a.reduce((acc, cur, i) => {
    //     return acc + (cur * b[i]);
    // }, 0)
    // return answer;
}