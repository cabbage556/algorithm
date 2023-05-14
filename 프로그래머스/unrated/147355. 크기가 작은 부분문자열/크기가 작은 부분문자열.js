function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const part = t.slice(i, i + p.length);
        
        if (part <= p) {
            answer++;
        }
    }
    
    return answer;
}