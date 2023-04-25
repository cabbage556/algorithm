function solution(binomial) {
    const arr = binomial.split(' ');
    
    if (arr[1] === '+') {
        return arr[0] * 1 + arr[2] * 1;
    } else if (arr[1] === '-') {
        return arr[0] * 1 - arr[2] * 1;
    } else {
        return arr[0] * 1 * arr[2] * 1;
    }
}