function solution(n) {
    const threes = [];
    let answer = 0;
    let powerOfThree = 1;
    
    // 3진수 변환 결과가 앞뒤 반전되도록 배열에 담기
    while (n > 0) {
        threes.push(n % 3);
        n = Math.floor(n / 3);
    }
    
    powerOfThree = Math.pow(3, threes.length - 1);  // threes 배열의 길이가 4이면 첫 번째 요소의 3의 제곱수는 3이된다.
    for (let i = 0; i < threes.length; i++) {
        answer += threes[i] * powerOfThree;  // 10진법으로 표현하기
        powerOfThree /= 3;                   // 배열 반복마다 3으로 나누기
    }
    
    return answer;
}