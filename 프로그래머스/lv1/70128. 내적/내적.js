function solution(a, b) {
    let answer = 0;
    a.forEach((el, idx) => {
        answer += el * b[idx];
    });
    return answer;
}