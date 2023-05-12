function solution(s) {
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 0
                ? s[middle - 1] + s[middle]
                : s[middle];
    
    // 수업 풀이1
//     const center = Math.floor(s.length / 2);
//     let answer = s[center];
    
//     if (s.length % 2 === 0) {
//         // 짝수일 경우 가운데 2글자 가져오기
//         answer = s[center - 1] + answer;
//     }
    
//     return answer;
    
    // 수업 풀이2
    // const center = Math.floor(s.length / 2);
    // return s.length % 2 === 1
    //     ? s[center]
    //     : s.substring(center - 1, center + 1);
}