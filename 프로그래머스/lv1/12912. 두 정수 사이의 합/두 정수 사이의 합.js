function solution(a, b) {
    if (a === b) return a;
    else if (a > b) {
        let temp = b;
        b = a;
        a = temp;
    }
    
    let answer = 0;
    
    for (let i = a; i <= b; i++) answer += i;
    
    return answer;
}