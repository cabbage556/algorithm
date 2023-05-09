function solution(n){
    return (n + '').split('').reduce((acc, cur) => acc * 1 + cur * 1, 0);
    
    // 수업 풀이 반복문 방식
    // let answer = 0;
    // n = String(n);
    // for (let i = 0; i < n.length; i++) {
    //     answer += Number(n[i]);
    // }
    // return answer;
    
    // 수업 풀이 메서드 방식
    // const answer = String(n).split("")
    //                         .reduce((acc, cur) => {
    //                             return acc + Number(cur);
    //                         }, 0);
    // return answer;
}