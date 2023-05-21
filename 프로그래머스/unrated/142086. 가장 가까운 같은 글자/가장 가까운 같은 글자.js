function solution(s) {
    const answer = new Array(s.length);
    const indexObj = {};
    
    for (let i = 0; i < s.length; i++) {
        const index = s.indexOf(s[i]);
        
        if (index === i) {
            answer[i] = -1;
        } else {
            answer[i] = i - indexObj[s[i]];
        }
        
        indexObj[s[i]] = i;
    }
    
    return answer;
}