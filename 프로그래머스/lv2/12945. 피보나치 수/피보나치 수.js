function solution(n) {
    const answer = [0, 1];
    
    for (let i = 0; i < n - 1; i++) {
        answer.push((answer[i] + answer[i + 1]) % 1234567);
    }
    
    return answer[n];
}