function solution(s) {
    return s.split('').sort((a, b) => a > b ? -1 : 1).join('');
    
    // 수업 풀이 반복문 방식
//     const answer = [];
//     for (let i = 0; i < s.length; i++) {
//         answer.push(s[i]);
//     }
//     answer.sort((a, b) => a > b ? -1 : 1);
//     return answer.join("");
    
    // 수업 풀이 메서드 방식
    // const answer = s.split("").sort((a, b) => { return a > b ? -1 : 1; }).join("");
    // return answer;
}