function solution(absolutes, signs) {
    // let answer = 0;
    // signs.forEach((sign, i) => {
    //     sign ? answer += absolutes[i] : answer -= absolutes[i];
    // })
    // return answer;
    
    // 수업 풀이 (반복문)
    // let answer = 0;
    // for (let i = 0; i < absolutes.length; i++) {
    //     signs[i]
    //         ? answer += absolutes[i]
    //         : answer -= absolutes[i];
    // }
    // return answer;
    
    // 수업 풀이 (메서드)
    const answer = absolutes.reduce((acc, cur, idx) => {
        return acc + (signs[idx] ? cur : -cur);
    }, 0);
    return answer;
}