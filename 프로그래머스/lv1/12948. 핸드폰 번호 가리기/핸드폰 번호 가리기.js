function solution(phone_number) {
    return phone_number
            .slice(-4)
            .padStart(phone_number.length, '*');
    
//     수업 풀이1
//     let answer = '';
    
//     for (let i = 0; i < phone_number.length; i++) {
//         if (i < phone_number.length - 4)  answer += "*";
//         else answer += phone_number[i];
//     }
    
//     return answer;
    
//     수업 풀이2
    // let answer = '';
    // answer = answer.padStart(phone_number.length - 4, "*");
    // answer += phone_number.slice(phone_number.length - 4);
    // return answer;
}