function solution(elements) {
    const answer = new Set();
    
    // i 루프: 연속 부분 수열의 길이
    for (let i = 1; i <= elements.length; i++) {
        // 연속 부분 수열의 길이가 elements의 길이와 같은 경우
        if (i === elements.length) {
            const sum = elements.reduce((acc, cur) => acc + cur, 0);
            answer.add(sum);
            break;
        }
        
        // 원순열 만들기 잘라서 뒤에 붙이기
        const circularPermutation = elements.concat(elements.slice(0, i));
        
        // j 루프: 연속 부분 수열의 합 구하기
        for (let j = 0; j < elements.length; j++) {
            let sum = 0;
            circularPermutation.slice(j, j + i).forEach(el => sum += el);
            answer.add(sum);
        }
    }
    
    return answer.size;
}