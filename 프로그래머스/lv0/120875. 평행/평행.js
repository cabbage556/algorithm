function solution(dots) {
    const [a, b, c, d] = dots;
    
    const ab = (a[1] - b[1]) / (a[0] - b[0]);
    const ac = (a[1] - c[1]) / (a[0] - c[0]);
    const ad = (a[1] - d[1]) / (a[0] - d[0]);
    const bc = (b[1] - c[1]) / (b[0] - c[0]);
    const bd = (b[1] - d[1]) / (b[0] - d[0]);
    const cd = (c[1] - d[1]) / (c[0] - d[0]);
    
    if (ab === cd) {
        return 1;
    }
    
    if (ac === bd) {
        return 1;
    }
    
    if (ad === bc) {
        return 1;
    }
    
    return 0;
}