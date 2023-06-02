function solution(number, limit, power) {
    let answer = 0;
    
    // 기사단원의 수만큼 약수 개수 구하기
    for (let knight = 1; knight <= number; knight++) {
        let divisorNum = 0;
        
        // 기사단원의 약수 개수 계산(제곱근까지만 판별하기)
        for (let deno = 1; deno <= Math.sqrt(knight); deno++) {
            if (knight % deno === 0) {
                if (knight / deno === deno) {
                    divisorNum++;
                } else {
                    divisorNum += 2;
                }
            }
        }
        
        // 기사단원의 무기가 공격력 제한 수치를 넘는 경우 무기 공격력 제한
        if (divisorNum > limit) {
            divisorNum = power;
        }
        answer += divisorNum;
    }
    
    return answer;
}