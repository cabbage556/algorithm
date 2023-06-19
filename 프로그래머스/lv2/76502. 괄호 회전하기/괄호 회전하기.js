function solution(s) {
    let answer = 0;
    const openingBraces = ['(', '{', '['];
    const closingBraces = [')', '}', ']'];
    
    for (let i = 0; i < s.length; i++) {
        // 왼쪽으로 한칸 회전
        s = s.slice(1) + s[0];
        
        // 첫 문자가 닫는 괄호면 올바르지 않은 경우
        if (closingBraces.includes(s[0])) {
            continue;
        }
        
        // 올바른 괄호인지 확인
        const stack = [];
        for (const value of s) {
            // 여는 괄호면 스택에 푸시하기
            if (openingBraces.includes(value)) {
                stack.push(value);
            }
            // 닫는 괄호인 경우
            else {
                const poppedOpeningBrace = stack.pop();
                
                // 스택에 여는 괄호가 없는 경우
                if (!poppedOpeningBrace) {
                    continue;
                }
                // 같은 종류의 괄호가 아닌 경우
                else if (openingBraces.indexOf(poppedOpeningBrace) !== closingBraces.indexOf(value)) {
                    stack.push(poppedOpeningBrace);
                    continue;
                }
            }
        }
        
        if (stack.length === 0) {
            answer++;
        }
    }
    
    return answer;
}