function solution(n) {
    return String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('') * 1;
    
    // n = (n + '')                    // 문자열로 바꾸기
    //         .split('')              // 배열로 쪼개기
    //         .sort((a, b) => b - a)  // 내림차순 정렬하기
    //         .join('');              // 다시 문자열로 바꾸기
    // return n * 1;  // 정수로 리턴
}