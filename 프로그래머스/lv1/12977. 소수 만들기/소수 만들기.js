function solution(nums) {
    let answer = 0;
    
    // 서로 다른 세 개의 숫자 가져오기 for-3개
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let o = j + 1; o < nums.length; o++) {
                const sum = nums[i] + nums[j] + nums[o];
                
                // 소수 판별
                let count = 0;
                for (let k = 1; k <= sum; k++) {
                    if (sum % k === 0) { // 약수 찾기
                        count++;
                        
                        if (count > 2) // count가 2보다 크면 소수가 아니므로 for 종료
                            break;
                    }
                }
                // count가 2이면 소수
                if (count === 2)
                    answer++;
            }
        }
    }
    return answer;
}