function solution(lines) {
    let answer = 0;
    
    for (let i = -100 ; i <= 100; i++) {
        let count = 0;
        
        if (lines[0][0] <= i && i < lines[0][1]) {
            count++;
        }
        
        if (lines[1][0] <= i && i < lines[1][1]) {
            count++;
        }
        
        if (lines[2][0] <= i && i < lines[2][1]) {
            count++;
        }
        
        if (count >= 2) {
            answer++;
        }
    }
    
    return answer;
}