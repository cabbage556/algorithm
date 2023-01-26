function solution(numbers) {
//     const answer = [];

//     while (numbers.length > 0) {
//       const lastNum = numbers.pop();
//       numbers.forEach(el => answer.push(lastNum + el));
//     }

//     return answer.filter((el, idx) => answer.indexOf(el) === idx).sort((a, b) => a - b);
    
    // 수업 풀이
//     const answer = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             const sum = numbers[i] + numbers[j];
//             if (!answer.includes(sum)) {
//                 answer.push(sum);
//             }
//         }
//     }
    
//     return answer.sort((a, b) => a - b);
    
    // 수업 풀이 Set 객체 사용
//     const answer = new Set([]);
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             const sum = numbers[i] + numbers[j];
//             answer.add(sum);
//         }
//     }
    
//     // return [...answer].sort((a, b) => a - b);
//     return Array.from(answer).sort((a, b) => a - b);
    
    // 수업 풀이 메서드 방식
    const answer = new Set([]);
    
    numbers.forEach((num1, i) => {
        numbers.slice(i + 1).forEach((num2) => {
            const sum = num1 + num2;
            answer.add(sum);
        });
    });
    
    return Array.from(answer).sort((a, b) => a - b);
}