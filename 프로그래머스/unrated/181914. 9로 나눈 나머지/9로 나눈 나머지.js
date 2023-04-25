function solution(number) {
    const sum = number
            .split('')
            .reduce((acc, cur) => {
                return acc * 1 + cur * 1;
            }, 0);
    return sum % 9;
}