function solution(n) {
    const answer = [2]; // 2는 유일한 짝수 소수
    
    for (let i = 3; i <= n; i += 2) { // 3 이상의 모든 홀수만 검사
        let temp = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) { // 제곱근 이하의 수까지만 검사
            if (i % j === 0 && j !== 1) {
                temp++;
                break;
            }
        }
        
        if (temp === 0) {
            answer.push(i);
        }
    }
    
    return answer.length;
}