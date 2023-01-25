function solution(arr) {
    // const min = Math.min(...arr);
    // arr.splice(arr.indexOf(min), 1);
    // return arr.length === 0 ? [-1] : arr;
    
    // 수업 풀이
    const answer = [];
    
    // 1. 최소값 찾기
    let min = arr[0];
    arr.forEach(el => {
        if (el < min) min = el;
    });
    
    // 2. 최소값 제외한 숫자만 answer에 추가
    arr.forEach(el => {
        if (el !== min) answer.push(el);
    });
    
    return answer.length === 0 ? [-1] : answer;
}