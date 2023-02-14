function solution(slice, n) {
    let pizza = 0;
    
    while (n > 0) {
        pizza++;
        n -= slice;
    }
    
    return pizza;
}