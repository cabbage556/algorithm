function solution(array) {
    const obj = {};
    const answer = [];
    
    // 배열의 요소를 key로, 등장 횟수를 value로 설정
    for (const num of array) {
        if (!obj[num]) obj[num] = 1;
        else obj[num]++;
    }
    
    for (const key in obj) {
        if (Math.max(...Object.values(obj)) === obj[key])
            answer.push(key * 1);
    }
    
    return answer.length > 1 ? -1 : answer[0];
}