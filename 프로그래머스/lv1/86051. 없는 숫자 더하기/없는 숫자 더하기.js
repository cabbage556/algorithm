function solution(numbers) {
    const zeroNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    
    zeroNine.forEach(el => {
        if (!numbers.includes(el)) answer += el;
    });
    
    return answer;
}