function solution(s) {
    let zero = 0;   // 제거한 0의 갯수
    let binary = 0; // 이진변환 횟수
    
    while (s !== '1') {  // s가 1이 될 때까지 계속 이진 변환
        let noZero = "";
        
        // s에서 모든 0 제거
        for (const str of s) {
            if (str === '1') noZero += str;
            else zero++;
        }
        s = noZero.length; // 0 제거 후 길이
        noZero = '';       // 변수 재사용 초기화
        
        while (s > 0) {    // 0 제거 후의 길이를 2진법으로 표현(뒤집힌 2진법)
            noZero += s % 2;
            s = Math.floor(s / 2);
        }
        noZero = noZero.split("").reverse("").join(""); // 문자열 -> 배열 -> 뒤집기 -> 문자열
        s = noZero; // 이진변환 결과
        binary++;
    }
    
    return [binary, zero];
}