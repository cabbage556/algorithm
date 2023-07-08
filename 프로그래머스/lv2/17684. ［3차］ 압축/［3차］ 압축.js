function solution(msg) {
    const answer = []; // 압축

    // 사전 초기화
    const dictionary = new Map();
    let dictionaryIndex = 1;
    for (let i = 0; i < 26; i++) {
        dictionary.set(String.fromCharCode(i + 65), dictionaryIndex++);
    }

    let w = ""; // 현재 글자
    for (let i = 0; i < msg.length; i++) {
        w += msg[i];
        const next = w + msg[i + 1];

        // 사전에서 다음 글자가 없는 경우 등록
        if (!dictionary.get(next)) {
            dictionary.set(next, dictionaryIndex++); // 사전 등록
            answer.push(dictionary.get(w)); // 압축
            w = ""; // 현재 글자 초기화
        }
    }

    return answer;
}