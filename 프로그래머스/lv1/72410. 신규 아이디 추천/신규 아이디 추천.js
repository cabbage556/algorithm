function solution(new_id) {
    let answer = new_id
                    .toLowerCase() // 소문자 치환
                    .replace(/[^\w-_.]/g, '') // 소문자와 숫자(\w), 빼기, 밑줄, 마침표 제외 모두 제거
                    .replace(/\.{2,}/g, '.') // 마침표 2번 이상 연속된 부분을 하나의 마침표로 치환
                    .replace(/^\.|\.$/g, '') // 마침표 처음과 끝에 위치한다면 제거
                    .replace(/^$/g, 'a') // 빈 문자열이라면 'a' 대입
                    .substring(0, 15) // 16자 이상이면 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
                    .replace(/\.$/g, ''); // 마침표가 끝에 위치한다면 끝에 위치한 마침표 제거
    
    // console.log(answer);
    
    if (answer.length <= 2) {
        let lastChar = answer[answer.length - 1];
        const remaining = 3 - answer.length;
        
        for (let i = 0; i < remaining; i++)
            answer += lastChar;
    }
    
    return answer;
}