function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 여벌 체육복을 가져온 학생이 도난당한 경우 reserve, lost에서 제외
    const lost2 = lost.filter(el => !reserve.includes(el));
    const reserve2 = reserve.filter(el => !lost.includes(el));
    
    let answer = n - lost2.length;
    
    // 도난당한 학생이 체육복을 빌리는 경우
    for (let i = 0; i < lost2.length; i++) {
        const beforeNum = reserve2.indexOf(lost2[i] - 1);
        const afterNum = reserve2.indexOf(lost2[i] + 1);
        
        if (beforeNum !== -1) {
            reserve2.splice(beforeNum, 1);
            answer++;
            continue;
        }
        
        if (afterNum !== -1) {
            reserve2.splice(afterNum, 1);
            answer++;
            continue;
        }
    }
    
    return answer;
}