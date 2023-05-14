// 수업 풀이1 사용
// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 수업 풀이2, 3 사용
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }
        
        const str = upper.includes(s[i]) ? upper : lower;
        
        str.indexOf(s[i]) + n >= str.length
            ? answer += str[str.indexOf(s[i]) + n - str.length]
            : answer += str[str.indexOf(s[i]) + n];
    }
    
    return answer;
    
    // 수업 풀이1
//     let answer = "";
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ")
//             answer += " "; // 공백일 경우 공백 추가
//         else {
//             let idx = alphabet.indexOf(s[i]);
//             const word = idx > 25
//                             ? alphabet.slice(26)       // 대문자
//                             : alphabet.slice(0, 26);   // 소문자
//             idx = word.indexOf(s[i]) + n;
            
//             if (idx > 25)
//                 idx -= 26;
            
//             answer += word[idx];
//         }
//     }
//     return answer;
    
    // 수업 풀이2
//     let answer = "";
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ")
//             answer += " ";
//         else {
//             const word = lower.includes(s[i]) ? lower : upper;
//             let idx = word.indexOf(s[i]) + n;
            
//             if (idx > 25)
//                 idx -= 26;
            
//             answer += word[idx];
//         }
//     }
    
    // 수업 풀이3
//     const answer = s.split("")
//                     .reduce((acc, cur) => {
//                         const word = lower.includes(cur) ? lower : upper;
//                         let idx = word.indexOf(cur) + n;
                        
//                         if (idx > 25)
//                             idx -= 26;
                        
//                         return acc + (
//                             cur === " " ? " " : word[idx]
//                         );
//                     }, "");
//     return answer;
    
    // 수업 풀이4(아스키코드)
    // charCodeAt: 주어진 문자의 유니코드 데이터(숫자)를 반환
    // String.fromCharCode: 유니코드 데이터(숫자)를 문자열로 변환
//     let answer = "";
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ")
//             answer += " ";
//         else {
//             let idx = s[i].charCodeAt() + n;  // 'A': 65, 'a': 97
            
//             if (idx > 122 || (idx > 90 && (idx - n) < 97)) // 소문자 체크, 대문자인데 대문자 범위를 넘어가지 않았는지 체크
//                 idx -= 26;
            
//             answer += String.fromCharCode( idx );
//         }
//     }
//     return answer;
}