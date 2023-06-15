function solution(n) {
    const numberArray = new Array(n).fill(1);
    numberArray.forEach((el, i) => numberArray[i] += i);
    
    let answer = 0;
    let sum = 0; // 부분합
    let end = 0;
    
    // start 증가하며 반복
    for (let i = 0; i < numberArray.length; i++) {
        // end까지 이동하기
        while (sum < n && end < numberArray.length) {
            sum += numberArray[end];
            end += 1;
        }
        // 합이 n일 때 카운트
        if (sum === n) {
            answer++;
        }
        // start가 증가하기 전에 부분합에서 빼기
        sum -= numberArray[i];
    }
    
    return answer;
}