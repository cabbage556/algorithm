function solution(s) {
    const p = s.toLowerCase().split('').filter(el => el === 'p').length;
    const y = s.toLowerCase().split('').filter(el => el === 'y').length;
    
    return p === y ? true : false;
    
    // 수업 풀이 반복문 방식
//     s = s.toLowerCase();
//     let p = 0;
//     let y = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'p') p++;
//         else if (s[i] === 'y') y++;
//     }
//     return p === y ? true : false;
    
    // 수업 풀이 메서드 방식
    // const check = {}; // 알파벳 개수 정리 객체
    // const answer = s.toLowerCase().split("")
    //                               .forEach(str => {
    //                                   check[str] === undefined ? check[str] = 1 : check[str] += 1;
    //                               });
    // return check['p'] === check['y'];
}