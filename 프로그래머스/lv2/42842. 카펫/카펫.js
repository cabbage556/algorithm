function solution(brown, yellow) {
    const yellowDivisors = [];
    
    if (yellow === 1) {
        return [3, 3];
    }
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            yellowDivisors.push(i);
            
            if (i !== yellow / i) {
                yellowDivisors.push(yellow / i);
            }
        }
    }
    
    for (let i = 0; i < yellowDivisors.length; i+=2) {
        const height = yellowDivisors[i];
        const width = yellowDivisors[i + 1]  ?? yellowDivisors[i];
        const brownCarpets = (width + 2) * 2 + height * 2;
        
        if (brownCarpets === brown) {
            return [width + 2, height + 2];
        }
    }
}