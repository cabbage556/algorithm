function solution(n) {
    const threes = [];
    let answer = 0;
    let powerOfThree = 1;
    
    while (n > 0) {
        threes.push(n % 3);
        n = Math.floor(n / 3);
    }
    
    powerOfThree = Math.pow(3, threes.length - 1);
    for (let i = 0; i < threes.length; i++) {
        answer += threes[i] * powerOfThree;
        powerOfThree /= 3;
    }
    
    return answer;
}