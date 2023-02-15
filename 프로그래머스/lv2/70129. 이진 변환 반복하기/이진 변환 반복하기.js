function solution(s) {
//     let zero = 0;   // 제거한 0의 갯수
//     let binary = 0; // 이진변환 횟수
    
//     while (s !== '1') {  // s가 1이 될 때까지 계속 이진 변환
//         let noZero = "";
        
//         // s에서 모든 0 제거
//         for (const str of s) {
//             if (str === '1') noZero += str;
//             else zero++;
//         }
//         s = noZero.length; // 0 제거 후 길이
//         noZero = '';       // 변수 재사용 초기화
        
//         while (s > 0) {    // 0 제거 후의 길이를 2진법으로 표현(뒤집혀서 표현됨)
//             noZero += s % 2;
//             s = Math.floor(s / 2);
//         }
//         // 2진법이 뒤집혀서 표현되었으므로 다시 뒤집음
//         noZero = noZero.split("").reverse("").join(""); // 문자열 -> 배열 -> 뒤집기 -> 문자열
//         s = noZero; // 이진변환 결과
//         binary++;
//     }
    
//     return [binary, zero];
    
    // 수업 풀이
//     let count = 0;  // 이진변환 횟수
//     let remove = 0; // 제거된 0의 갯수
    
//     while (s !== '1') {
//         count++;  // 이진변환 횟수 === 반복 횟수
        
//         // 1. s에서 0을 제거
//         let temp = '';
//         for (let i = 0; i < s.length; i++) {
//             if (s[i] === '0')
//                 remove++;
//             else
//                 temp += s[i];
//         }
        
//         // 2. 0을 제거한 문자열의 길이를 2진법으로 변환하기
//         s = temp.length;   // 결과가 '1'이 아니라면 다시 반복
//         s = s.toString(2); // 결과가 '1'이라면 반복문 종료
//     }
    
//     return [count, remove];
    
    // 수업 풀이 재귀 함수
    // [count, remove] => 구조분해할당
    const recursion = (s, [ count, remove ]) => {
        if (s === '1')
            return [count, remove];
        
        count++; // 반복마다 이진변환 증가
        remove += s.split('').filter(num => num === '0').length; // 제거한 0의 갯수
        s = s.split('').filter(num => num === '1').length;  // 0 제거 후 문자열 길이
        s = s.toString(2); // 이진 변환
        
        return recursion(s, [count, remove]);
    };
    
    return recursion(s, [0, 0]); // [count, remove]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}