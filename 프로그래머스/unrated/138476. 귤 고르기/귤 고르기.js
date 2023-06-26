function solution(k, tangerine) {
    // k: 상자에 담을 귤 개수
    // tangerine: 귤의 크기를 담은 배열
    // return: k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값
    
    let answer = 0;
    const numberOfTangerine = {}; // 귤 크기별 갯수
    
    for (const value of tangerine) {
        numberOfTangerine[value] = numberOfTangerine[value] ?? 0;
        numberOfTangerine[value]++; // 귤 크기별 갯수 계산
    }
    
    // 갯수가 많은 귤부터 확인
    for (const count of Object.values(numberOfTangerine).sort((a, b) => b - a)) {
        answer++;
        
        if (k > count) {
            k -= count;
        } else {
            break;
        }
    }
    
    return answer;
}