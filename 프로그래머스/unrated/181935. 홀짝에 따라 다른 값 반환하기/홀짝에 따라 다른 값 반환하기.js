function solution(n) {
    let sum = 0;
    let i = n % 2 === 0 ? 2 : 1;
    
    for (i; i <= n; i += 2) {
        if (n % 2 === 0) {
            sum += i ** 2;
        } else {
            sum += i;
        }
    }
    return sum;
}