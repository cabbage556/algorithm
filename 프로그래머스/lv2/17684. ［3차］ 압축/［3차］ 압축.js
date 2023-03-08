function solution(msg) {
    // 사전 초기화 - 색인 번호 지정 -> String.fromCharCode(65) === 'A'
    const dictionary = {};
    let dictIndex = 1;
    for (let i = 65; i <= 90; i++) {
        dictionary[String.fromCharCode(i)] = dictIndex++;
    }
    
    // 1
    const answer = []; // 출력할 색인 번호 저장 배열
    let str = '';      // 여러 글자를 임시 저장하는 변수
    
    for (let i = 0; i < msg.length; i++) {
        str += msg[i];
        const next = str + msg[i + 1];
        
        if (!dictionary[next]) {             // 현재 글자와 바로 다음 글자를 합쳤을 때 사전에 존재하지 않는 경우
            dictionary[next] = dictIndex++;  // 사전에 색인 번호와 함께 저장
            answer.push(dictionary[str]);    // 사전에 이미 존재하는 현재 글자는 출력하기 위해 저장
            str = '';                        // 저장 후 임시 저장 변수 초기화
        }
    }
    
    return answer;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // 2
}