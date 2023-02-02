function solution(s, n) {
    const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let answer = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += s[i];
            continue;
        }
        
        const afterIndex = (lowCase.indexOf(s[i].toLowerCase()) + n) % lowCase.length;
        
        s[i] === s[i].toLowerCase()
            ? answer += lowCase[afterIndex]
            : answer += lowCase[afterIndex].toUpperCase();
    }
    
    return answer;
}