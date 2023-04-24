function solution(a, b) {
    a += '';
    b += '';
    
    if (a + b > b + a) {
        return (a + b) * 1;
    } else if (a + b < b + a) {
        return (b + a) * 1;
    } else {
        return (a + b) * 1;
    }
}