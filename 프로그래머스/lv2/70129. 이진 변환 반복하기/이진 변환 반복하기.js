function solution(s) {
    let binaryCount = 0; // 이진 변환 횟수
    let zeroCount = 0;   // 제거한 0의 개수
    
    while (s !== '1') {
        binaryCount++; // 이진 변환
        
        let temp = '';
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                zeroCount++; // 제거한 0의 개수 증가
            } else {
                temp += s[i]; // 1이면 temp에 추가
            }
        }
        
        s = temp.length.toString(2); // 길이를 2진수 변환
    }
    
    return [binaryCount, zeroCount];
}