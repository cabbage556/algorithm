function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    // 문자열 s의 각 알파벳 읽기
    for (let i = 0; i < s.length; i++) {
        let checkIdx = alphabet.indexOf(s[i]) + 1;
        let skipNum = 0;
        let tempStr = '';
        
        while (skipNum < index) {
            if (checkIdx > 25) {
                checkIdx -= 26;
            }
            
            if (!skip.includes(alphabet[checkIdx])) {
                tempStr += alphabet[checkIdx];
                skipNum++;
            }
            
            checkIdx++;
        }
        
        answer += tempStr[tempStr.length - 1];
    }
    
    return answer;
}