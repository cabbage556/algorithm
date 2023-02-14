function solution(hp) {
    let ants = 0;
    const atks = [5, 3, 1];
    
    for (const atk of atks) {
        while (hp >= atk) {
            hp -= atk;
            ants++;
        }
    }
    
    return ants;
}