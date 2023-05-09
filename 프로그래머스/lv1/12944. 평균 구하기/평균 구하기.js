function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    
    // 수업 풀이
//     const sum = arr.reduce((acc, cur) => {
//         // console.log(acc, cur);
//         return acc + cur;
//     })
    
//     return sum / arr.length;
}