function solution(numbers) {
    const zeroNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answer = zeroNine
                        .filter(el => numbers.includes(el))
                        .reduce(((acc, cur) => acc - cur), 45);
    return answer;
}