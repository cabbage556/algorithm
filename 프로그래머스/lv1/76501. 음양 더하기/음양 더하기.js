function solution(absolutes, signs) {
    let answer = 0;
    
    signs.forEach((sign, i) => {
        sign ? answer += absolutes[i] : answer -= absolutes[i];
    })
    
    return answer;
}