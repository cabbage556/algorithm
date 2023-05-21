function solution(n) {
    const answer = [2];
    
    for (let i = 3; i <= n; i += 2) {
        let temp = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
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