function solution(n) {
//     const threes = [];
//     let answer = 0;
//     let powerOfThree = 1;
    
//     // 3진수 변환 결과가 앞뒤 반전되도록 배열에 담기
//     while (n > 0) {
//         threes.push(n % 3);
//         n = Math.floor(n / 3);
//     }
    
//     powerOfThree = Math.pow(3, threes.length - 1);  // threes 배열의 길이가 4이면 첫 번째 요소의 3의 제곱수는 3이된다.
//     for (let i = 0; i < threes.length; i++) {
//         answer += threes[i] * powerOfThree;  // 10진법으로 표현하기
//         powerOfThree /= 3;                   // 배열 반복마다 3으로 나누기
//     }
    
//     return answer;
    
    // 수업 풀이
//     // 1. 3진법으로 변환
//     n = n.toString(3);
    
//     // 2. 앞뒤 반전하기
//     let reverse = '';
//     for (let i = n.length - 1; i >= 0; i--) {
//         reverse += n[i];
//     }
    
//     // 3. 3진법으로 변환된 데이터를 10진법으로 변환하기
//     return parseInt(reverse, 3);
    
    // 수업 풀이
    n = n.toString(3)  // 3진법으로 변환
         .split('')    // 배열로 나누기
         .reverse()    // 뒤집기
         .join('');    // 문자열로 합치기
    
    return parseInt(n, 3);
    
    
}