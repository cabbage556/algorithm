function solution(intStrs, k, s, l) {
    const answer = [];
    
    intStrs.forEach(intStr => {
        if (intStr.slice(s, s + l) * 1 > k) {
            answer.push(intStr.slice(s, s + l) * 1);
        }
    });
    
    return answer;
}