function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const max1 = numbers[0] * numbers[1];
    const max2 = numbers.at(-1) * numbers.at(-2);
    
    return max1 > max2 ? max1 : max2;
}