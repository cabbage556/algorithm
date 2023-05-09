function solution(x, n) {
    return new Array(n).fill(x).map((el, i) => {
        return el + x * i;
    });
    
    // 수업 풀이 반복문 방식
    // const answer = [];
    // for (let i = 1; i <= n; i++) {
    //     answer.push(x * i);
    // }
    // return answer;
    
    // 수업 풀이 메서드 방식
    // const answer = new Array(n).fill(1)
    //                            .map((el, idx) => {
    //                                // console.log((el + idx) * x);
    //                                return (el + idx) * x;
    //                            });
    // return answer;
}