function solution(arr) {
    const min = Math.min(...arr);
    const answer = arr.filter(num => num !== min);
    
    return answer.length === 0 ? [-1] : answer;
    
    // 수업 풀이 (반복문 방식)
//     const answer = [];
    
    // 1. 최소값 찾기
//     let min = arr[0];
//     arr.forEach(el => {
//         if (el < min) min = el;
//     });
    
    // 2. 최소값 제외한 숫자만 배열에 추가
//     arr.forEach(el => {
//         if (el !== min) answer.push(el);
//     });
    
//     return answer.length === 0 ? [-1] : answer;
    
    // 수업 풀이 (메서드 방식)
    // 1. 최소값 찾기
    // const min = Math.min(...arr);
    
    // 2. 최소값을 제외한 숫자만 배열에 추가
    // const answer = arr.filter(el => el !== min);
    // return answer.length === 0 ? [-1] : answer;
    
}