function solution(strings, n) {
    const answer = strings.sort((a, b) => {
        // n번째 인덱스 기준 오름차순 정렬
        if (a.charCodeAt(n) !== b.charCodeAt(n)) {
            return a.charCodeAt(n) - b.charCodeAt(n);
        }
        
        // 사전순 정렬
        return a > b ? 1 : -1;
    });
    
    return answer;
}