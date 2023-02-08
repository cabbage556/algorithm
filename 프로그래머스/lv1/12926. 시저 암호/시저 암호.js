// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 수업 풀이1 사용

// 수업 풀이2, 3 사용
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
//     const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let answer = "";
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === " ") {
//             answer += s[i];
//             continue;
//         }
        
//         const afterIndex = (lowCase.indexOf(s[i].toLowerCase()) + n) % lowCase.length;
        
//         s[i] === s[i].toLowerCase()
//             ? answer += lowCase[afterIndex]
//             : answer += lowCase[afterIndex].toUpperCase();
//     }
    
//     return answer;
    
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
    const answer = s.split("")
                    .reduce((acc, cur) => {
                        const word = lower.includes(cur) ? lower : upper;
                        let idx = word.indexOf(cur) + n;
                        
                        if (idx > 25)
                            idx -= 26;
                        
                        return acc + (
                            cur === " " ? " " : word[idx]
                        );
                    }, "");
    return answer;
}