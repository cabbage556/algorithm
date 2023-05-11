function solution(x) {
    let sum = 0;
    x = String(x);
    
    for (let i = 0; i < x.length; i++) {
        sum += x[i] * 1;
    }
    
    return Number(x) % sum === 0;
    
    // [...String(x)] => 문자열 배열로 쪼개기
    // const sum = [...String(x)]
    //                         .reduce(((acc, cur) => acc * 1 + cur * 1), 0);
    // const sum = (x + '').split("")
    //                     .reduce(((acc, cur) => acc * 1 + cur * 1), 0);
    // return x % sum === 0;
    
    // 수업 풀이 (반복문 방식)
//     let sum = 0;
//     x = String(x);
    
//     for (const str of x) sum += Number(str);
    
//     return x % sum === 0;
    
    // 수업 풀이 (메서드 방식)
    // toString() 변수로 선언된 데이터에만 사용 가능
    // const sum = x.toString()
    //              .split("")
    //              .reduce((acc, cur) => {
    //                  return acc + Number(cur);
    //              }, 0);
    // return x % sum === 0;
}