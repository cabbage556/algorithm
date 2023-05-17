const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    if (!Number.isNaN(s * 1)) {
        return s * 1;
    }
    
    numbers.forEach((num, i) => {
        s = s.replaceAll(num, i)
    });
    
    return s * 1;
    
    // 수업 풀이
//     for (let i = 0; i < numbers.length; i++) {
//         // replace 메서드 사용
//         // while (s.includes(numbers[i])) {  // zero의 경우 모든 zero를 0으로 바꾸기
//         //     s = s.replace(numbers[i], i); // zero -> 0, one -> 1, ..., nine -> 9
//         // }
        
//         // replaceAll 메서드 사용
//         s = s.replaceAll(numbers[i], i);
//     }
//     return s * 1;
    
    // 수업 풀이 (메서드)
    // numbers.forEach((num, i) => {
    //     s = s.split(num) // num으로 split한 배열에서 num은 사라진다.
    //          .join(i);   // i로 join하면 i가 문자열에 존재한다.
    // });
    // return s * 1;
    
    // 수업 풀이 (정규표현식)
    // for (let i = 0; i < numbers.length; i++) {
    //     // s = s.replace(/numbers[i]/g, i); // 정규표현식에 변수를 넣을 수 없다.
    //     const regExp = new RegExp(numbers[i], 'g');
    //     s = s.replace(regExp, i);
    // }
    // return Number(s);
}