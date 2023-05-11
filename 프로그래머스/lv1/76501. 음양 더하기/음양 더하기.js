function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach((absolute, i) => {
        if (signs[i]) {
            answer += absolute;
        } else {
            answer -= absolute;
        }
    });
    
    return answer;
    
    // 수업 풀이 (메서드)
    // const answer = absolutes.reduce((acc, cur, idx) => {
    //     return acc + (signs[idx] ? cur : -cur);
    // }, 0);
    // return answer;
}