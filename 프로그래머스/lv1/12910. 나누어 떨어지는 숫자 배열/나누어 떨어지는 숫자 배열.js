function solution(arr, divisor) {
    const answer = arr
                    .filter(el => el % divisor === 0)
                    .sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
    
    // 수업 풀이 반복문 방식
//     const answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % divisor === 0) answer.push(arr[i]);
//     }
//     return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}