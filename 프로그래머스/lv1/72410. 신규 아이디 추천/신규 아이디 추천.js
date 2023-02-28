const permission = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.'

function solution(new_id) {
//     let answer = new_id
//                     .toLowerCase() // 소문자 치환
//                     .replace(/[^\w-_.]/g, '') // 소문자와 숫자(\w), 빼기, 밑줄, 마침표 제외 모두 제거
//                     .replace(/\.{2,}/g, '.') // 마침표 2번 이상 연속된 부분을 하나의 마침표로 치환
//                     .replace(/^\.|\.$/g, '') // 마침표 처음과 끝에 위치한다면 제거
//                     .replace(/^$/g, 'a') // 빈 문자열이라면 'a' 대입
//                     .substring(0, 15) // 16자 이상이면 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
//                     .replace(/\.$/g, ''); // 마침표가 끝에 위치한다면 끝에 위치한 마침표 제거
    
//     // console.log(answer);
    
//     // 길이가 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙인다.
//     if (answer.length <= 2) {
//         let lastChar = answer[answer.length - 1];
//         const remaining = 3 - answer.length;
        
//         for (let i = 0; i < remaining; i++)
//             answer += lastChar;
//     }
    
//     return answer;
    
    // 수업 풀이
    // 1단계 - 소문자로 치환하기
    new_id = new_id.toLowerCase();
    
    // 2단계 - 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거하기
    let answer = '';
    for (let i = 0; i < new_id.length; i++) {
        if (permission.includes(new_id[i])) {
            answer += new_id[i];
        }
    }
    
    // 3단계 - 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환하기
    while (answer.includes('..')) {
        answer = answer.replace('..', '.');
    }
    
    // 4단계 - 마침표가 처음이나 끝에 위치한다면 제거하기
    if (answer[0] === '.') {
        answer = answer.slice(1);
    }
    const removeLastDot = () => {
        if (answer.at(-1) === '.') {
            answer = answer.slice(0, answer.length - 1);
        }
    };
    removeLastDot();
    
    // 5단계 - 빈 문자열이라면, 'a' 대입하기
    if (answer === '') {
        answer = 'a';
    }
    
    // 6단계 - 길이가 16자 이상이라면 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거하기
    // 제거 후 마침표가 마지막에 위치한다면 마지막에 위치한 마침표를 제거하기
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        
        removeLastDot();
    }
    
    // 7단계 - 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙이기
    if (answer.length <= 2) {
        answer = answer.padEnd(3, answer.at(-1));
    }
    
    return answer;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}