function solution(s) {
    s = s.toLowerCase();
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || (s[i] !== ' ' && s[i - 1] === ' ')) {
            answer += s[i].toUpperCase();
            continue;
        }
        
        answer += s[i];
    }
    
    return answer;
}