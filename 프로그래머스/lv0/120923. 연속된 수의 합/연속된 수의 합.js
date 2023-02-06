function solution(num, total) {
    // 구하려는 결과의 첫 번째 항: a
    let a = (2 * total / num - num + 1) / 2;
    const answer = [];
    
    for (let i = 1; i <= num; i++)
        answer.push(a++);
    
    return answer;
}