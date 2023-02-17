function solution(n) {
    let answer = 0;
    let facto = 1;
    for (let i = 1; i <= 10; i++) {
        facto *= i;
    
        if (facto > n) {
            answer = i - 1;
            break;
        } else if (facto === n) {
            answer = i;
            break;
        }
    }
    return answer;
}