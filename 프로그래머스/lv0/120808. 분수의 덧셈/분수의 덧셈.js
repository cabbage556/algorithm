function solution(numer1, denom1, numer2, denom2) {
    let numer;
    let denom;
    let gcd;
    
    if (denom1 % denom2 === 0) {
        numer2 = numer2 * (denom1 / denom2);
        denom2 = denom2 * (denom1 / denom2);
        
        numer = numer1 + numer2;
        denom = denom1;
    } else if (denom2 % denom1 === 0) {
        numer1 = numer1 * (denom2 / denom1);
        denom1 = denom1 * (denom2 / denom1);
        
        numer = numer1 + numer2;
        denom = denom2;
    } else {
        let temp1 = denom1;
        
        numer1 *= denom2;
        denom1 *= denom2;
        
        numer2 *= temp1;
        
        numer = numer1 + numer2;
        denom = denom1;
    }
    
    for (let i = 2; i <= Math.min(numer, denom); i++) {
        if (Math.min(numer, denom) % i === 0 && Math.max(numer, denom) % i === 0) {
            gcd = i;
        }
    }
    
    if (!gcd) {
        gcd = 1;
    }
    
    
    return [numer / gcd, denom / gcd];
}