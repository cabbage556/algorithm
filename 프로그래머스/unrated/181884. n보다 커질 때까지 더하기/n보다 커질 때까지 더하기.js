function solution(numbers, n) {
    let sum = 0;
    
    numbers.some((el) => {
        if (sum > n) {
            return true;
        }
        
        sum += el;
        return false;
    });
    
    return sum;
}