function solution(n) {
    let sum = 0;
    let num = 1;
    
    while (num <= n / 2) {
        if (n % num === 0) {
            sum += num;
        }
        
        num++;
    }
    
    sum += n;
    return sum;
    
    // 반복문 절반으로 줄이기
    // 약수는 자기 자신을 제외하고 자신의 절반 이상인 값이 존재하지 않는다.
    // let answer = 0;
    // for (let i = 1; i <= n / 2; i++) {
    //     if (n % i === 0) answer += i;
    // }
    // answer += n;
    // return answer;
    
//     const answer = new Array(n)   // n개의 크기를 갖는 빈 배열 생성(요소는 아무것도 가지지 않고 비어있음)
//                         .fill(1)  // 빈 배열을 지정한 값으로 모두 채워넣는다.
//                         .reduce((acc, cur, i) => {
//                             // console.log(acc, cur, i, cur + i);
//                             const num = cur + i;
                            
//                             return acc + (n % num === 0
//                                 ? num // 약수일 경우
//                                 : 0   // 약수가 아닐 경우
//                             );
//                         }, 0);
//     return answer;
}