function solution(n, left, right) {
    const array = [];
    
    for (let i = left; i <= right; i++) {
        array.push(Math.max(Math.floor(i / n), i % n) + 1);
    }
    
    return array;
}