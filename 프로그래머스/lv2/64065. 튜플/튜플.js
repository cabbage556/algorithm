function solution(s) {
    // s: 특정 튜플을 표현하는 집합이 담긴 문자열
    // return: s가 표현하는 튜플을 담은 배열
    const answer = new Set();
    
    s = s.slice(2, s.length - 2);
    s = s.split('},{');
    s.sort((a, b) => a.length - b.length);
    
    for (let i = 0; i < s.length; i++) {
        s[i].split(',').forEach(el => {
            answer.add(el);
        });
    }

    return Array.from(answer).map(Number);
}