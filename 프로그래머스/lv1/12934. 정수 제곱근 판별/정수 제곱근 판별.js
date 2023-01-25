function solution(n) {
    let answer = -1;
    
    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            answer = i;
            break;
        }
    }
    
    return answer === -1 ? answer : (answer + 1) * (answer + 1);
}