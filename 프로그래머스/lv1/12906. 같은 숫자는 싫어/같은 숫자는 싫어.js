function solution(arr) {
    // 내 풀이
    return arr.filter((element, idx) => {
        return element !== arr[idx + 1];
    })
    
    // 수업 풀이
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] !== arr[i + 1]) answer.push(arr[i]);  // 1
        if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
    }
    
    return answer;
    
}