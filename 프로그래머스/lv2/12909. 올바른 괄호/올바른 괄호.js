function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && s[i] === ')') {
            return false;
        } else if (i === s.length - 1 && s[i] === '(') {
            return false;
        }
        
        if (s[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
        }
    }
    
    return stack.length === 0 ? true : false;
}