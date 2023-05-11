function solution(numbers) {
    let answer = 0;
    const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    numbers = oneToNine.filter(num => !numbers.includes(num));
    numbers.forEach(num => answer += num);
    
    return answer;
    
    // 수업 풀이 (반복문 방식)
//     let answer = 0;
    
//     for (let i = 0; i < 10; i++) {
//         if (!numbers.includes(i)) answer += i;
//     }
    
//     return answer;
    
    // 수업 풀이 (메서드 방식)
    // const answer = new Array(9)
    //                         .fill(1)
    //                         .reduce((acc, cur, i) => {
    //                             const num = cur + i;
    //                             return acc + (
    //                                 numbers.includes(num)
    //                                     ? 0    // 배열에 존재하면 0을 더한다.
    //                                     : num  // 배열에 존재하지 않는다면 num을 더한다.
    //                             );
    //                         }, 0);
    // return answer;
}