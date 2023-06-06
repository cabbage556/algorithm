function solution(sides) {
    let answer = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    if (max - min === 1) {
        return 1;
    }
    
    // 가장 긴 변이 sides에서 가장 긴 변인 경우
    for (let i = max - min + 1; i <= max; i++) {
        answer++;
    }
    
    // 가장 긴 변이 나머지 한 변인 경우
    for (let i = max + 1; i < max + min; i++) {
        answer++;
    }
    
    return answer;
}