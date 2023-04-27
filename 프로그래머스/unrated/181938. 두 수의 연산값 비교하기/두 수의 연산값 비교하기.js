function solution(a, b) {
    const ab = Number((a + '') + (b + ''));
    const _2ab = 2 * a * b;
    
    if (ab > _2ab || ab === _2ab) {
        return ab;
    } else {
        return _2ab;
    }
}