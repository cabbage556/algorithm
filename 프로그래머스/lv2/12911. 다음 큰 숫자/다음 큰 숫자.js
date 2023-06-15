function solution(n) {
    let answer = 0;
    let oneCount = 0;
    const binaryStr = n.toString(2);
    let nextN = n + 1;
    
    for (const value of binaryStr) {
        if (value === '1') {
            oneCount++;
        }
    }
    
    // n의 다음 큰 숫자가 되는 조건
    // 1. n보다 큰 자연수
    // 2. 2진수 변환 시 1의 개수가 같음
    // 3. 1,2를 만족하는 수 중 가장 작은 수
    while (true) {
        let nextBinaryStr = nextN.toString(2);
        let nextOneCount = 0;
        
        for (const value of nextBinaryStr) {
            if (value === '1') {
                nextOneCount++;
            }
        }
        
        if (oneCount === nextOneCount) {
            answer = nextN;
            break;
        } else {
            nextN++;
        }
    }
    
    return answer;
}
