function solution(absolutes, signs) {
    // let answer = 0;
    // signs.forEach((sign, i) => {
    //     sign ? answer += absolutes[i] : answer -= absolutes[i];
    // })
    // return answer;
    
    // 수업 풀이 (반복문)
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i])
            answer += absolutes[i];
        else
            answer -= absolutes[i];
    }
    return answer;
}