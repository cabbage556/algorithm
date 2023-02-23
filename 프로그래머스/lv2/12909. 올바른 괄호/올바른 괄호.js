function solution(s){
    if (s.length === 1 || s[0] === ')') // 길이가 1이거나 ')'로 시작하는 괄호의 경우 false 반환
        return false;
    
    const arr = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if (arr[arr.length - 1] === '(' && s[i] === ')')
            arr.pop();
        else
            arr.push(s[i]);
    }
    
    return arr.length === 0;
}