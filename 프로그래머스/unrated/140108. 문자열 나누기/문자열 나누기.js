function solution(s) {
    const answer = [];
    let obj = {};
    let x = s[0];
    let split = '';
    
    // 문자열 읽기
    for (let i = 0; i < s.length; i++) {
        let num = 0;
        
        split += s[i];
        
        // 문자열 개수 세기
        obj[s[i]] = obj[s[i]] || 0;
        obj[s[i]]++;
        
        // x와 지금까지 나온 문자열 개수 비교
        for (const key in obj) {
            if (key !== x) {
                num += obj[key];
            }
        }
        
        // 개수가 같으면 지금까지 읽은 문자열 분리
        if (num === obj[x]) {
            answer.push(split);
            split = '';
            x = s[i + 1];
            obj = {};
        } else if (i === s.length - 1) {
            answer.push(split);
        }
    }
    
    return answer.length;
}