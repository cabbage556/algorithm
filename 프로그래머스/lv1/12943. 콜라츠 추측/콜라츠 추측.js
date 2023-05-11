function solution(num) {
    if (num === 1) {
        return 0;
    }
    
    let times = 0;
    while (num !== 1) {
        if (times === 500) {
            break;
        }
        
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        
        times++;
    }
    
    return times === 500 ? -1 : times;
    
    // 수업 풀이 (반복문 방식) => 500번 보다 적게 반복할 수 있음
//     let answer = 0;
    
//     for (let i = 0; i < 500; i++) {
//         if (num === 1) return answer;
        
//         answer++;
        
//         if (num % 2 === 0) num /= 2;
//         else num = num * 3 + 1;
//     }
    
//     return -1;
    
    // 수업 풀이 (메서드 방식) => 무조건 500번 반복해야 함
//     let answer = 0;
    
//     new Array(500).fill(1)
//                   .forEach(() => {
//                       if (num !== 1) {
//                           answer++;
//                           num = num % 2 === 0
//                             ? num / 2
//                             : num * 3 + 1 ;
//                       }
//                   });
//     return num !== 1 ? -1 : answer;
    
}